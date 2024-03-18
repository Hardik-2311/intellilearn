const { z } = require('zod');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');

// Define Zod schemas for request validation
const registerSchema = z.object({
  username: z.string().min(3).max(30),
  email: z.string().email(),
  password: z.string().min(6)
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
});

// Register user functionality
exports.registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = registerSchema.parse(req.body);

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });
    await newUser.save();
    res.status(200).json({ success: true, message: 'Registration successful', newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login functionality
exports.login = asyncHandler(async (req, res) => {
  const { email, password } = loginSchema.parse(req.body);

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate access token
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
    });
    res.status(200).json({ success: true, message: 'Login successful', accessToken });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get current user
exports.currentUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});
