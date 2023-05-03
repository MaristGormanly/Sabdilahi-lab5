// Import the user model
const user = require('../model/user');

// Create an empty array to store users
var users = [];

// Create two example users and add them to the array
var user1 = user.createUser("Brian", "Gormanly", "brian.gormanly@marist.edu", "letmein");
var user2 = user.createUser("Saeed", "Abdilahi", "saeed.gilmore@gmail.com", "abdilahi");
users.push(user1);
users.push(user2);

// Define a controller function to get all users
exports.getAllUsers = function(req, res) {
    // Set the response content type to JSON
    res.setHeader('Content-Type', 'application/json');
    // Send the array of users in the response
    res.send(users);
}

// Define a controller function to create a new user
exports.saveUser = function(req, res) {
    // Create a new user object based on the request body
    let newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    };
    // Add the new user object to the users array
    users.push(newUser);
    // Set the response content type to JSON
    res.setHeader('Content-Type', 'application/json');
    // Send the updated array of users in the response
    res.send(users);
}

// Define a controller function to get a user by index
exports.getUser = function(req, res) {
    // Set the response content type to JSON
    res.setHeader('Content-Type', 'application/json');
    // Send the user object at the specified index in the response
    res.send(users[req.params.index]);
}

// Define a controller function to delete a user by index
exports.deleteUser = function(req, res) {
    // Remove the user object at the specified index from the users array
    users.splice(req.params.index, 1);
    // Set the response content type to JSON
    res.setHeader('Content-Type', 'application/json');
    // Send the updated array of users in the response
    res.send(users);
}

// Define a controller function to update a user by index
exports.updateUser = function(req, res) {
	let index = req.params.index;
	if (index >= 0 && index < users.length) {
	  let updatedUser = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password
	  };
	  users[index] = updatedUser;
	  res.setHeader('Content-Type', 'application/json');
	  res.send(users);
	} else {
	  res.status(404).json({ message: 'User not found' });
	}
  };




