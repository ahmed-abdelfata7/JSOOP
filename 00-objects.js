"use strict";
console.log(
    `=====>>>Creating objects in js is (easy) but if you want to create and use 100 object
    It is a very not easy and extensive task so the best way to do that is creating constructor function<<<====
    `
)
//defining literal object
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
    title: "Learn basics in js",
    author: "Ahmed Mahmoud",
    content: "Learn basic programming in javascript",
    summary: function () {
        let summary = `Title:${this.title} WrittenBy:${this.author} Book-contents:${this.content}`;
        return summary;
    }
}
const book3 = {
    title: "Learn functions in js",
    author: "Ahmed Mahmoud",
    content: "Learn functions programming in javascript",
    summary: function () {
        let summary = `Title:${this.title} WrittenBy:${this.author} Book-contents:${this.content}`;
        return summary;
    }
}
console.log("=============================");
console.log(book1.summary());
console.log("=============================");
console.log(book2.summary());
console.log("=============================");
console.log(book3.summary());


//get values and keys of an object
console.log("=============================");
console.log("==========Object Values==========");
console.log(Object.values(book1));
console.log("=============================");
console.log("==========Object Keys==========");
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

