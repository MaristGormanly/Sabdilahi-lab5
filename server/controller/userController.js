// Import the user model
let user = require('../model/user');

console.log("[userController] initialized");

// Create an empty array to store users
var users = [];

// Create two example users and add them to the array
var user1 = user.createUser("Brian", "Gormanly", "brian.gormanly@marist.edu", "letmein");
var user2 = user.createUser("Saeed", "Abdilahi", "saeed.gilmore@gmail.com", "abdilahi");
users.push(user1)
users.push(user2) // Fixed: pushing user2 instead of user1

// Define a controller function to get all users
exports.getAllUsers = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(users);
}

// Define a controller function to create a new user
exports.saveUser = function (req, res) {
  let newUser = {
    "firstName": req.body.firstName,
    "lastName": req.body.lastName,
    "email": req.body.email,
    "password": req.body.password
  };
  users.push(newUser);
  res.setHeader('Content-Type', 'application/json');
  res.send(newUser);
}

// Define a controller function to get a user by index
exports.getUser = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(users[req.params.index]);
}
// Update a user by using PUT method of the /api/user/:index resource url
exports.updateUser = (req, res) => {
  const index = req.params.index;
  users[index] = user.createUser(req.body.firstName, req.body.lastName, req.body.email, req.body.password);
  res.setHeader('Content-Type', 'application/json');
  res.send(users[index]);
}


// Define a controller function to update a user by index
exports.partialupdateUser = function (req, res) {
  let index = req.params.index;
  if (index >= 0 && index < users.length) {
    let updatedUser = Object.assign({}, users[index]); // create a copy of the user object
    if (req.body.firstName) {
      updatedUser.firstName = req.body.firstName;
    }
    if (req.body.lastName) {
      updatedUser.lastName = req.body.lastName;
    }
    if (req.body.email) {
      updatedUser.email = req.body.email;
    }
    if (req.body.password) {
      updatedUser.password = req.body.password;
    }
    users[index] = updatedUser;
    res.setHeader('Content-Type', 'application/json');
    res.send(users);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
}

// Define a controller function to delete a user by index
exports.deleteUser = function (req, res) {
  users.splice(req.params.index, 1);
  res.setHeader('Content-Type', 'application/json');
  res.send(users);
}
