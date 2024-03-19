const express = require('express');
const router = express.Router();

const {
    registerUser, login , currentUser
} = require('../controllers/userController');
const authMiddleware = require('../middleware/TokenValidate');
const validation = require ("../middleware/joivalidate")

console.log(authMiddleware)
// Register
router.post('/register', registerUser);

// Login user
router.post('/login', login);

router.get('/current-user', authMiddleware, currentUser);
module.exports = router;