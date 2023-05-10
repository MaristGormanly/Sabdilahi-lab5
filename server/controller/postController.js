// Import the post model
const Post = require('../model/post');
var postService=require('../service/postService')

// Define a controller function to get all posts
exports.getAllPosts = async function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  let posts= await postService.getAllPosts();
  res.send(posts);
}

// Define a controller function to create a new post
exports.createPost = async function(req, res) {
  try {
    const post = new Post({
      title: req.body.title,
      body: req.body.body
    });
    const newPost = await post.save();
    res.setHeader('Content-Type', 'application/json');
    res.send(newPost);
  } catch(err) {
    console.error(err);
    res.status(500).send('Error creating post');
  }
}

// Define a controller function to get a post by ID
exports.getPost = async function(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send('Post not found');
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(post);
  } catch(err) {
    console.error(err);
    res.status(500).send('Error getting post');
  }
}

// Define a controller function to update a post by ID
exports.updatePost = async function(req, res) {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!post) {
      return res.status(404).send('Post not found');
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(post);
  } catch(err) {
    console.error(err);
    res.status(500).send('Error updating post');
  }
}

// Define a controller function to delete a post by ID
exports.deletePost = async function(req, res) {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).send('Post not found');
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(post);
  } catch(err) {
    console.error(err);
    res.status(500).send('Error deleting post');
  }
}
