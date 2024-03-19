const Course = require('../models/Course');

// Controller for creating a new course
exports.createCourse = async (req, res) => {
    try {
        const { title, description, instructor, price, enrollmentLimit, duration, category } = req.body;

        const newCourse = new Course({
            title,
            description,
            instructor,
            price,
            enrollmentLimit,
            duration,
            category
        });

        await newCourse.save();
        res.status(201).json({ success: true, message: 'Course created successfully', course: newCourse });
    } catch (error) {
        console.error('Error creating course:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller for retrieving all courses
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json({ success: true, courses });
    } catch (error) {
        console.error('Error retrieving courses:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller for retrieving a single course by ID
exports.getCourseById = async (req, res) => {
    try {
        const courseId = req.params.id;
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ success: false, message: 'Course not found' });
        }
        res.status(200).json({ success: true, course });
    } catch (error) {
        console.error('Error retrieving course:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller for updating a course
exports.updateCourse = async (req, res) => {
    try {
        const courseId = req.params.id;
        const updatedData = req.body;

        const updatedCourse = await Course.findByIdAndUpdate(courseId, updatedData, { new: true });
        if (!updatedCourse) {
            return res.status(404).json({ success: false, message: 'Course not found' });
        }

        res.status(200).json({ success: true, message: 'Course updated successfully', course: updatedCourse });
    } catch (error) {
        console.error('Error updating course:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller for deleting a course
exports.deleteCourse = async (req, res) => {
    try {
        const courseId = req.params.id;

        const deletedCourse = await Course.findByIdAndDelete(courseId);
        if (!deletedCourse) {
            return res.status(404).json({ success: false, message: 'Course not found' });
        }

        res.status(200).json({ success: true, message: 'Course deleted successfully' });
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
