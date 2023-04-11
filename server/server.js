const express = require('express');
const app = express();
var userRoutes = require('./route/userRoutes');
app.use('/api/user', userRoutes);
const bodyParser = require('body-parser');
app.use(bodyParser.json({type:'application.json'}));

// Serve static files from the "client/public" directory
app.use(express.static('client/public'));

// Route for the login URL
app.get('/login', function(req, res) {
  res.sendFile('login.html', {root: './client/views'});
});

// Route for the signup URL
app.get('/signup', function(req, res) {
  res.sendFile('signup.html', {root: './client/views'});
});

// Route for the root URL
app.get('/', function(req, res) {
  // Send the "home.html" file from the "client/views" directory
  res.sendFile('home.html', {root: './client/views'});
});

// Start the server
app.listen(1337, function() {
  console.log('Marist Chatter listening on port 1337!');
});
