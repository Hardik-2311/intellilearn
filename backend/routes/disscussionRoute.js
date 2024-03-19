const express = require('express');
const router = express.Router();
const discussionController = require('../controllers/discussionController');

// Define routes for discussions
router.post('/', discussionController.createDiscussion);
router.get('/', discussionController.getAllDiscussions);
router.get('/course/:courseId', discussionController.getDiscussionsByCourse);
router.put('/:id', discussionController.updateDiscussion);
router.delete('/:id', discussionController.deleteDiscussion);

module.exports = router;
