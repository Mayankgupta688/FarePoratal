class Employee {
    debugger
    constructor(inputName) {
        this.name = inputName
    }
    getData() {
        console.log(this.name)
    }
}

 function Employee(inputName) {
    this.name = inputName;
}

Employee.prototype.getData = function () {
    console.log(this.name);
};

var empObject = Employee("TechnoFunnel");
var empObjectOther = new Employee("TechnoFunnel");
empObject.getData();