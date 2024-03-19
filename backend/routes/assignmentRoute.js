const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');

// Define routes for assignments
router.post('/', assignmentController.createAssignment);
router.get('/', assignmentController.getAllAssignments);
router.get('/course/:courseId', assignmentController.getAssignmentsByCourse);
router.put('/:id', assignmentController.updateAssignment);
router.delete('/:id', assignmentController.deleteAssignment);

module.exports = router;
