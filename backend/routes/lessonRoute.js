const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lessonController');

// Define routes for lessons
router.post('/', lessonController.createLesson);
router.get('/course/:courseId', lessonController.getAllLessonsByCourse);
router.get('/:id', lessonController.getLessonById);
router.put('/:id', lessonController.updateLesson);
router.delete('/:id', lessonController.deleteLesson);

module.exports = router;
