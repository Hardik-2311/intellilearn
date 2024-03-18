const User = require('../models/User');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asynchandler = require("express-async-handler");
// how to register user

exports.registerUser = asynchandler(async (req, res) => {
    try {
        console.log('Request body:', req.body);
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

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
        res.status(200).json({ success: true, message: 'registration successful', newUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// login functionality

exports.login = asynchandler(async (req, res) => {
    try {
        const { email, password } = req.body;


        // empty fields
        if (!email || !password) {
            res.status(404);
            throw new Error("all fields are required");
        }
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

        if (user && isPasswordMatch) {
            const accesstoken = jwt.sign(
                {
                    user: {
                        username: user.username,
                        email: user.email,
                        id: user.id,
                    },
                },
                process.env.JWT_SECRET,
                { expiresIn: "1d" }
            );
            res.cookie('accessToken', accesstoken, {
                httpOnly: true,
            });
            res.status(200).json({ success: true, message: 'Login successful', accessToken: accesstoken });

        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// current user
exports.currentUser = asynchandler(async (req, res) => {
    res.status(200).json(req.user);
});