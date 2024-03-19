const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');

// Define routes for enrollments
router.post('/', enrollmentController.createEnrollment);
router.get('/', enrollmentController.getAllEnrollments);
router.get('/user/:userId', enrollmentController.getEnrollmentsByUser);
router.get('/course/:courseId', enrollmentController.getEnrollmentsByCourse);
router.put('/:id', enrollmentController.updateEnrollment);
router.delete('/:id', enrollmentController.deleteEnrollment);

module.exports = router;
