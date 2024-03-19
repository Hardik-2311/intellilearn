const Lesson = require('../models/Lesson');

// Controller for creating a new lesson
exports.createLesson = async (req, res) => {
    try {
        const { title, description, content, duration, order, course } = req.body;

        const newLesson = new Lesson({
            title,
            description,
            content,
            duration,
            order,
            course
        });

        await newLesson.save();
        res.status(201).json({ success: true, message: 'Lesson created successfully', lesson: newLesson });
    } catch (error) {
        console.error('Error creating lesson:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller for retrieving all lessons for a given course
exports.getAllLessonsByCourse = async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const lessons = await Lesson.find({ course: courseId });
        res.status(200).json({ success: true, lessons });
    } catch (error) {
        console.error('Error retrieving lessons:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller for retrieving a single lesson by ID
exports.getLessonById = async (req, res) => {
    try {
        const lessonId = req.params.id;
        const lesson = await Lesson.findById(lessonId);
        if (!lesson) {
            return res.status(404).json({ success: false, message: 'Lesson not found' });
        }
        res.status(200).json({ success: true, lesson });
    } catch (error) {
        console.error('Error retrieving lesson:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller for updating a lesson
exports.updateLesson = async (req, res) => {
    try {
        const lessonId = req.params.id;
        const updatedData = req.body;

        const updatedLesson = await Lesson.findByIdAndUpdate(lessonId, updatedData, { new: true });
        if (!updatedLesson) {
            return res.status(404).json({ success: false, message: 'Lesson not found' });
        }

        res.status(200).json({ success: true, message: 'Lesson updated successfully', lesson: updatedLesson });
    } catch (error) {
        console.error('Error updating lesson:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller for deleting a lesson
exports.deleteLesson = async (req, res) => {
    try {
        const lessonId = req.params.id;

        const deletedLesson = await Lesson.findByIdAndDelete(lessonId);
        if (!deletedLesson) {
            return res.status(404).json({ success: false, message: 'Lesson not found' });
        }

        res.status(200).json({ success: true, message: 'Lesson deleted successfully' });
    } catch (error) {
        console.error('Error deleting lesson:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
