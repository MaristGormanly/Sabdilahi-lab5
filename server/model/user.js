//Create a User class with constructor to define properties of the user object
class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}
// Export a function named createUser that creates a new instance of User class
// with passed arguments and returns the newly created user object
exports.createUser = function (firstName, lastName, email, password) {
    return new User(firstName, lastName, email, password);
}