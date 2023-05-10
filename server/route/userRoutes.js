var userController = require('../controller/userController');
console.log("[userRoutes] initialized");

var express = require('express');
var router = express.Router();
module.exports = router;

// Route for getting all users
router.route('/')
  .get((req, res) => {
    userController.getAllUsers(req, res);
  })
  .post((req, res) => {
    userController.saveUser(req, res);
  })
  .put((req, res) => {
    userController.updateUser(req, res);
  });

// Route for getting a specific user by index
router.route('/:index')
  .get((req, res) => {
    userController.getUser(req, res);
  })
  .delete((req, res) => {
    userController.deleteUser(req, res);
  })
  .put((req, res) => {
    userController.updateUser(req, res);
  })

  .patch((req, res) => {
    userController.partialupdateUser(req, res);
  });
  module.exports = router;

