const Discussion = require('../models/Discussion');

// Controller for creating a new discussion
exports.createDiscussion = async (req, res) => {
    try {
        const { title, content, user, course } = req.body;

        const newDiscussion = new Discussion({
            title,
            content,
            user,
            course
        });

        await newDiscussion.save();
        res.status(201).json({ success: true, message: 'Discussion created successfully', discussion: newDiscussion });
    } catch (error) {
        console.error('Error creating discussion:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller for retrieving all discussions
exports.getAllDiscussions = async (req, res) => {
    try {
        const discussions = await Discussion.find();
        res.status(200).json({ success: true, discussions });
    } catch (error) {
        console.error('Error retrieving discussions:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller for retrieving discussions for a specific course
exports.getDiscussionsByCourse = async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const discussions = await Discussion.find({ course: courseId });
        res.status(200).json({ success: true, discussions });
    } catch (error) {
        console.error('Error retrieving discussions:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller for updating a discussion
exports.updateDiscussion = async (req, res) => {
    try {
        const discussionId = req.params.id;
        const updatedData = req.body;

        const updatedDiscussion = await Discussion.findByIdAndUpdate(discussionId, updatedData, { new: true });
        if (!updatedDiscussion) {
            return res.status(404).json({ success: false, message: 'Discussion not found' });
        }

        res.status(200).json({ success: true, message: 'Discussion updated successfully', discussion: updatedDiscussion });
    } catch (error) {
        console.error('Error updating discussion:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller for deleting a discussion
exports.deleteDiscussion = async (req, res) => {
    try {
        const discussionId = req.params.id;

        const deletedDiscussion = await Discussion.findByIdAndDelete(discussionId);
        if (!deletedDiscussion) {
            return res.status(404).json({ success: false, message: 'Discussion not found' });
        }

        res.status(200).json({ success: true, message: 'Discussion deleted successfully' });
    } catch (error) {
        console.error('Error deleting discussion:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
