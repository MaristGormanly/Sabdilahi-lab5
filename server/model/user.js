
class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}
exports.createUser = function (firstName, lastName, email, password) {
    return new User(firstName, lastName, email, password);
}