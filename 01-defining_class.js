/*
  Developed By Eng / Ahmed Mahmoud
*/
class Passenger {
    /*
      init properties and asigning it
    */
    constructor(data) {
        this.Name = data.name;
        this.Age = data.age;
        this.Salary = data.salary;
    }
    get() {
        let data = {
            Name: this.Name,
            Age: this.Age,
            Salary: this.Salary
        };
        return data;
    }
}

//creating object from class 
var ob = new Passenger({ name: "Ahmed", age: 21, salary: 5000 });
console.log(ob);
console.log(ob.get());
console.log(ob.Age);
console.log(ob.Name);
console.log(ob.Salary);
console.log("==============================================");
//creating another object 
var ob = new Passenger({ name: "Ali", age: 26, salary: 5000 });
console.log(ob);
console.log(ob.get());
console.log(ob.Age);
console.log(ob.Name);
console.log(ob.Salary);


