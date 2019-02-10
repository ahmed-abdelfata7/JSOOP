"use strict";
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
