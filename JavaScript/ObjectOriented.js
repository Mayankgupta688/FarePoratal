// Is JavaScript Functional / Object Oriented ?

// Functional =
// Object Oriented = 3 / class ES5 (ES6 2019 - Full Stack Developer) / Syntactic Sugar around Function

// Java / .NET => JavaScript

class Employee {
    static name = "Mayank";
    constructor(inputName) {
        this.name = inputName
    }
    getData() {
        console.log(this.name)
    }
}

class Manager extends Employee {
    getManagerData() {
        console.log(this.name)
    }
}

var empObject = new Employee("TechnoFunnel");
