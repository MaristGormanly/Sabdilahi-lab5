//This line requires the userController module.
var userController = require('../controller/userController'); 
//This line logs a message to the console to indicate that the userRoutes module has been initialized.
console.log("[userRoutes] initialized");

// require the express library
var express = require('express');
// create chainable route handlers for a path by using app.route()
var router = express.Router();
module.exports = router;
// all users routes
router.route('/')
.get( ( req, res ) => {
userController.getAllUsers( req, res );
})
.post( ( req, res ) => {
userController.saveUser( req, res );
}
);
// user by array index route
router.route('/:index')
.get( ( req, res ) => {
userController.getUser( req, res );
}
)
.delete((req, res) => {
    userController.deleteUser(req, res);
  }
  );

  



