"use strict";
var users = [];
class User {
    constructor(name, email, phone, password, age) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.age = age;
    }
    login() {
        console.log(`${this.name} has been logged in`);
        return this;
    }
    logout() {
        console.log(`${this.name} has been logged out`);
        return this;
    }
}
class Admin extends User {
    create(user) {
        users.push(user.name);
    }
    delete(user) {
        let index = users.indexOf(user.name);
        users.splice(index, 1)
    }
    update(user) {
        let index = users.indexOf(user.name);
        users.splice(index, 1)
        if (users.length != 0) {
            users[index] = user.name;
        } else {
            users[0] = user.name;
        }
    }
    show(user) {
        return user;
    }
}
var user1 = new User("Ahmed", "ahmed.m.web.dev@gmail.com", "+00000000", "admin", 27);
var user2 = new User("Ali", "ali.dev@gmail.com", "+00000000", "admin", 27);
var user3 = new User("diaa", "diaa.dev@gmail.com", "+00000000", "admin", 27);

user1.login().logout();//method chaining

var admin = new Admin;

admin.create(user1);
admin.delete(user1);
admin.create(user2);
admin.update(user3);
console.log(admin.show(user3));
console.log(users);