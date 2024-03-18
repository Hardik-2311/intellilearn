const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    price: { type: Number, default: 0 },
    enrollmentLimit: { type: Number, default: 0 },
    duration: { type: String },
    category: { type: String },
    creationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', courseSchema);
