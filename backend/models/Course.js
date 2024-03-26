const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    price: { type: Number, default: 0 },
    enrollmentLimit: { type: Number, default: 0 },
    duration: { type: String },
    category: {
        mainCategory: { type: String, required: true },
        subCategory: { type: String, required: true }
    },
    creationDate: { type: Date, default: Date.now },
    difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'beginner' },
    image: { type: String, required: true }
});

module.exports = mongoose.model('Course', courseSchema);
