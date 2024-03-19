const Assignment = require("../models/Assignment")
// Controller for creating a new assignment
exports.createAssignment = async (req, res) => {
    try {
        const { title, description, file, dueDate, course } = req.body;

        const newAssignment = new Assignment({
            title,
            description,
            file,
            dueDate,
            course
        });

        await newAssignment.save();
        res.status(201).json({ success: true, message: 'Assignment created successfully', assignment: newAssignment });
    } catch (error) {
        console.error('Error creating assignment:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller for retrieving all assignments
exports.getAllAssignments = async (req, res) => {
    try {
        const assignments = await Assignment.find();
        res.status(200).json({ success: true, assignments });
    } catch (error) {
        console.error('Error retrieving assignments:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller for retrieving assignments for a specific course
exports.getAssignmentsByCourse = async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const assignments = await Assignment.find({ course: courseId });
        res.status(200).json({ success: true, assignments });
    } catch (error) {
        console.error('Error retrieving assignments:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller for updating an assignment
exports.updateAssignment = async (req, res) => {
    try {
        const assignmentId = req.params.id;
        const updatedData = req.body;

        const updatedAssignment = await Assignment.findByIdAndUpdate(assignmentId, updatedData, { new: true });
        if (!updatedAssignment) {
            return res.status(404).json({ success: false, message: 'Assignment not found' });
        }

        res.status(200).json({ success: true, message: 'Assignment updated successfully', assignment: updatedAssignment });
    } catch (error) {
        console.error('Error updating assignment:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller for deleting an assignment
exports.deleteAssignment = async (req, res) => {
    try {
        const assignmentId = req.params.id;

        const deletedAssignment = await Assignment.findByIdAndDelete(assignmentId);
        if (!deletedAssignment) {
            return res.status(404).json({ success: false, message: 'Assignment not found' });
        }

        res.status(200).json({ success: true, message: 'Assignment deleted successfully' });
    } catch (error) {
        console.error('Error deleting assignment:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};