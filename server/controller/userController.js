var user = require('../model/user')

var users = [];

var user1 = user.createUser("Brian", "Gormanly", "brian.gormanly@marist.edu", "letmein");
var user2 = user.createUser("Saeed", "Abdilahi", "saeed.gilmore@gmail.com", "abdilahi");
var user3 = user.createUser("Khalid", "Ismail", "khalid@wh.gov", "ismail");
var user4 = user.createUser("Roble", "Dayah", "roble@wh.gov", "pres2");
users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);

exports.getUsers = function(req, res) {
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
  res.send(users[req.params.userId]);
}

exports.deleteUser = function(req, res) {
	users.splice(req.params.userId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(users);
}

