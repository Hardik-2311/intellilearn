const express = require('express');
const router = express.Router();

const {
    registerUser, login
} = require('../controllers/userController');
const authMiddleware = require('../middleware/TokenValidate');

console.log(authMiddleware)
// Register
router.post('/register', registerUser);

// Login user
router.post('/login', login);

module.exports = router;