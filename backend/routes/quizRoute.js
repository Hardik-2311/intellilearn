const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

// Define routes for quizzes
router.post('/', quizController.createQuiz);
router.get('/', quizController.getAllQuizzes);
router.get('/:id', quizController.getQuizById);
router.put('/:id', quizController.updateQuiz);
router.delete('/:id', quizController.deleteQuiz);

// Route to get quizzes by course
router.get('/course/:courseId', quizController.getQuizzesByCourse);

module.exports = router;
