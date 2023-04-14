const user = require('../model/user')

var users = [];

var user1 = user.createUser("Brian", "Gormanly", "brian.gormanly@marist.edu", "letmein");
var user2 = user.createUser("Saeed", "Abdilahi", "saeed.gilmore@gmail.com", "abdilahi");
users.push(user1);
users.push(user2);

exports.getAllUsers = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(users);
}

exports.saveUser = function(req, res) {
    let newUser = user.createUser(req.body.firstName, req.body.lastName, req.body.email, req.body.password);
    users.push(newUser);
    res.setHeader('Content-Type', 'application/json');
    res.send(users);
}
  


exports.getUser = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.send(users[req.params.index]);
}

exports.deleteUser = function(req, res) {
	users.splice(req.params.index, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(users);
}

