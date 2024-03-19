const Quiz = require('../models/Quiz');

// Controller for creating a new quiz
exports.createQuiz = async (req, res) => {
    try {
        const { title, description, passingScore, course } = req.body;

        const newQuiz = new Quiz({
            title,
            description,
            passingScore,
            course
        });

        await newQuiz.save();
        res.status(201).json({ success: true, message: 'Quiz created successfully', quiz: newQuiz });
    } catch (error) {
        console.error('Error creating quiz:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller for retrieving all quizzes
exports.getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.status(200).json({ success: true, quizzes });
    } catch (error) {
        console.error('Error retrieving quizzes:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller for retrieving quizzes for a specific course
exports.getQuizzesByCourse = async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const quizzes = await Quiz.find({ course: courseId });
        res.status(200).json({ success: true, quizzes });
    } catch (error) {
        console.error('Error retrieving quizzes:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller for retrieving a single quiz by ID
exports.getQuizById = async (req, res) => {
    try {
        const quizId = req.params.id;
        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            return res.status(404).json({ success: false, message: 'Quiz not found' });
        }
        res.status(200).json({ success: true, quiz });
    } catch (error) {
        console.error('Error retrieving quiz:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller for updating a quiz
exports.updateQuiz = async (req, res) => {
    try {
        const quizId = req.params.id;
        const updatedData = req.body;

        const updatedQuiz = await Quiz.findByIdAndUpdate(quizId, updatedData, { new: true });
        if (!updatedQuiz) {
            return res.status(404).json({ success: false, message: 'Quiz not found' });
        }

        res.status(200).json({ success: true, message: 'Quiz updated successfully', quiz: updatedQuiz });
    } catch (error) {
        console.error('Error updating quiz:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller for deleting a quiz
exports.deleteQuiz = async (req, res) => {
    try {
        const quizId = req.params.id;

        const deletedQuiz = await Quiz.findByIdAndDelete(quizId);
        if (!deletedQuiz) {
            return res.status(404).json({ success: false, message: 'Quiz not found' });
        }

        res.status(200).json({ success: true, message: 'Quiz deleted successfully' });
    } catch (error) {
        console.error('Error deleting quiz:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
