"use strict";
function User(email, name) {
    this.email = email;
    this.name = name;
}
//create user prototype
User.prototype.login = function () {
    console.log(`${this.name} is loggedIn`);
}
User.prototype.logout = function () {
    console.log(`${this.name} is loggedOut`);
}
//inheritance from user function
function Admin(...args) {
    User.apply(this, args);
}
//get prototypes in user and add them to admin
Admin.prototype = Object.create(User.prototype);

//create admin object to try
var admin1 = new Admin("Ali@gmail.com", "Ali");
admin1.logout();
admin1.login();