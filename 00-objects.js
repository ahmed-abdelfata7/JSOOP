"use strict";
console.log(
    `Creating objects in js is easy but if you want to create and use 100 object
    It is a very diffcult and extensive task so the best way to do that is creating constructor function
    `
)
//defining literal object
let user = {
    firstName: "Ahmed",
    lastName: "Mahmmoud",
    email: "ahmed.m.web.dev@gmail.com",
    login() {
        console.log(`${this.firstName} ${this.lastName} has been logged in`);
    },
    logout() {
        console.log(`${this.firstName} ${this.lastName} has been logged out`);
    }
};
setTimeout(() => {
    user.login();
}, 1000);
setTimeout(() => {
    user.logout();
}, 4000);
//adding properties and methods to object
user.age = 27;
user.salary = 5000;
user.tax = 0.01;
user.netSalary = function () {
    let total = this.salary - (this.tax * this.salary);
    return total;
}
console.log(user.age);
console.log(user.netSalary());

//creating literal objects
const book1 = {
    title: "Learn OOP in js",
    author: "Ahmed Mahmoud",
    content: "Learn object oriented programming in javascript",
    summary: function () {
        let summary = `Title:${this.title} WrittenBy:${this.author} Book-contents:${this.content}`;
        return summary;
    }
}

const book2 = {
    title: "Learn logics in js",
    author: "Ahmed Mahmoud",
    content: "Learn basic programming in javascript",
    summary: function () {
        let summary = `Title:${this.title} WrittenBy:${this.author} Book-contents:${this.content}`;
        return summary;
    }
}
console.log(book1.summary());
console.log("=============================");
console.log(book2.summary());
//get values and keys of an object
console.log("=============================");
console.log(Object.values(book1));
console.log("=============================");
console.log(Object.keys(book1));
console.log("=============================");
//check if object has a key and get its value
let keys = Object.keys(book1);
if (keys.includes("title")) {
    console.log(book1.title);
}
console.log("=============================");
//check if object has a value 
let values = Object.values(book1);
if (values.includes("Ahmed Mahmoud")) {
    console.log("This is the author");
}

