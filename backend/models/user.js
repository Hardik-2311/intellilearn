const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['learner', 'instructor'], default: 'learner' },
    profilePicture: { type: String },
    bio: { type: String, default: "", required: false },
    dateJoined: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
