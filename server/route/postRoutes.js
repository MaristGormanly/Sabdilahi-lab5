// Require the express library
var express = require('express');
// Create a router
var router = express.Router();
// Import the postController module
var postController = require('../controller/postController');
module.exports = router;

// Set up the routes
router.route('/')
  .get((req, res) => {
    postController.getAllPosts(req, res);
  })
  .post((req, res) => {
    postController.createPost(req, res);
  });

// Route for getting a specific post by index
router.route('/:index')
  .get((req, res) => {
    postController.getPost(req, res);
  })
  .delete((req, res) => {
    postController.deletePost(req, res);
  })
  .patch((req, res) => {
    postController.updatePost(req, res);
  });
