"use strict";
function Employee(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}
employee.prototype.penalty = function () {
    let penaltyRatio = 0.01;
    let total = this.salary - (this.salary * penaltyRatio);
    return total
}
var emp1 = new Employee(1, "Ahmed", 5000);
console.log(emp1.penalty());