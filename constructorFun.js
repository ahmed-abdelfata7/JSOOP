"use strict";
//creating constructor function
function user(name, email) {
    this.name = name
    this.email = email;
    this.login = function () {
        console.log(`${this.name} is logged in.`);
    }
    this.logout = function () {
        console.log(`${this.name} is logged out.`)
    }
}
//creating object
var user1 = new user("Ahmed", "email@gmail.com")
user1.login();
user1.logout();