// Import the user model
const Post = require('../model/post');

// Create an empty array to store posts
var posts = [];

// Define a controller function to get all posts
exports.getAllPosts = function(req, res) {
  // Set the response content type to JSON
  res.setHeader('Content-Type', 'application/json');
  // Send the array of posts in the response
  res.send(posts);
}

// Define a controller function to create a new post
exports.createPost = function(req, res) {
  // Create a new post object based on the request body
  let newPost = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  };

  // Add the new post object to the posts array
  posts.push(newPost);

  // Set the response content type to JSON
  res.setHeader('Content-Type', 'application/json');

  // Send the updated array of posts in the response
  res.send(posts);
}

// Define a controller function to get a post by index
exports.getPost = function(req, res) {
  // Set the response content type to JSON
  res.setHeader('Content-Type', 'application/json');
  // Send the post object at the specified index in the response
  res.send(posts[req.params.index]);
}

// Define a controller function to update a post by index
exports.updatePost = function(req, res) {
  // Get the index of the post to update from the request parameters
  const index = req.params.index;

  // Check if the index is valid
  if (index >= 0 && index < posts.length) {
    // Update the post object at the specified index with the new data from the request body
    posts[index] = {
      ...posts[index], // Keep the existing properties of the post
      ...req.body // Overwrite with new data from the request body
    };

    // Set the response content type to JSON
    res.setHeader('Content-Type', 'application/json');

    // Send the updated post in the response
    res.send(posts[index]);
  } else {
    // If the index is invalid, send an error response
    res.status(404).send('Post not found');
  }
}

// Define a controller function to delete a post by index
exports.deletePost = function(req, res) {
  // Remove the post object at the specified index from the posts array
  posts.splice(req.params.index, 1);
  // Set the response content type to JSON
  res.setHeader('Content-Type', 'application/json');
  // Send the updated array of posts in the response
  res.send(posts);
}
