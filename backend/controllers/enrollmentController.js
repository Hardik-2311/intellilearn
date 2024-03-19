const Enrollment = require('../models/Enrollment');

// Controller for creating a new enrollment
exports.createEnrollment = async (req, res) => {
  try {
    const { user, course } = req.body;

    const newEnrollment = new Enrollment({
      user,
      course
    });

    await newEnrollment.save();
    res.status(201).json({ success: true, message: 'Enrollment created successfully', enrollment: newEnrollment });
  } catch (error) {
    console.error('Error creating enrollment:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Controller for retrieving all enrollments
exports.getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find();
    res.status(200).json({ success: true, enrollments });
  } catch (error) {
    console.error('Error retrieving enrollments:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Controller for retrieving enrollments for a specific user
exports.getEnrollmentsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const enrollments = await Enrollment.find({ user: userId });
    res.status(200).json({ success: true, enrollments });
  } catch (error) {
    console.error('Error retrieving enrollments:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Controller for retrieving enrollments for a specific course
exports.getEnrollmentsByCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const enrollments = await Enrollment.find({ course: courseId });
    res.status(200).json({ success: true, enrollments });
  } catch (error) {
    console.error('Error retrieving enrollments:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Controller for updating an enrollment
exports.updateEnrollment = async (req, res) => {
  try {
    const enrollmentId = req.params.id;
    const updatedData = req.body;

    const updatedEnrollment = await Enrollment.findByIdAndUpdate(enrollmentId, updatedData, { new: true });
    if (!updatedEnrollment) {
      return res.status(404).json({ success: false, message: 'Enrollment not found' });
    }

    res.status(200).json({ success: true, message: 'Enrollment updated successfully', enrollment: updatedEnrollment });
  } catch (error) {
    console.error('Error updating enrollment:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Controller for deleting an enrollment
exports.deleteEnrollment = async (req, res) => {
  try {
    const enrollmentId = req.params.id;

    const deletedEnrollment = await Enrollment.findByIdAndDelete(enrollmentId);
    if (!deletedEnrollment) {
      return res.status(404).json({ success: false, message: 'Enrollment not found' });
    }

    res.status(200).json({ success: true, message: 'Enrollment deleted successfully' });
  } catch (error) {
    console.error('Error deleting enrollment:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
