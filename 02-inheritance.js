/*
  super is a function and object
  As a function => when defining a constructor in a child class 
  (1)           => must use supper function with the same parameter of parent class
  (2)           => defining it before using this in child constructor
*/
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.address = address;
        this.age = age;
    }
    displayInfo() {
        return `Name:${this.name} | Address:${this.address} | Age:${this.address}`;
    }
};
class Student extends Person {
    constructor(name, age, address, courses) {
        super(name, age, address);
        this.courses = courses;
    }
    studentInfo() {
        let allCourses = '';
        this.courses.forEach((course) => {
            allCourses = allCourses + " | " + course;
        })
        return `${super.displayInfo()} | Courses:${allCourses}`;
    }
    displayInfo() {
        return "Overriding the parent function displayInfo() now i'm in Student child class";
    }
};
class Employee extends Person {
    constructor(name, age, address, salary) {
        super(name, age, address);
        this.salary = salary;
    }
    employeeInfo() {
        return super.displayInfo();
    }

};
let stdObj = new Student("Ahmed", 27, "Mansoura", ["English", "Math", "Sicence"]);
let employeeObj = new Employee("Diaa", 34, "Mansoura", 5000);

console.log(employeeObj.displayInfo());
console.log(stdObj.displayInfo());
console.log(stdObj.studentInfo());

