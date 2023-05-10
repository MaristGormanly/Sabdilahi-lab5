const express = require('express');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json({ type: 'application/json' }));

// Require the database connection module
// var db = require('./db/DATABASE');

// Connect to the database
// db.connect();

// Serve static files from the "client/public" directory
app.use(express.static('client/public'));

// Route for the login URL
app.get('/login', function(req, res) {
  res.sendFile('login.html', { root: './client/views' });
});

// Route for the signup URL
app.get('/signup', function(req, res) {
  res.sendFile('signup.html', { root: './client/views' });
});

// Route for the feed URL
app.get('/feed', function(req, res) {
  res.sendFile('feed.html', { root: './client/views' });
});

// Route for the root URL
app.get('/', function(req, res) {
  // Send the "home.html" file from the "client/views" directory
  res.sendFile('home.html', { root: './client/views' });
});

// Define the routes
let userRoutes = require('./route/userRoutes');
app.use('/api/user', userRoutes);

let postRoutes = require('./route/postRoutes');
app.use('/api/post', postRoutes);


// Start the server
app.listen(1337, function() {
  console.log('Marist Chatter listening on port 1337!');
});