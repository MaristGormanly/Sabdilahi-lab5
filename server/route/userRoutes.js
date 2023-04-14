var userController = require('../controller/userController'); 
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

  


// output to the log that the module is loaded successfully!
