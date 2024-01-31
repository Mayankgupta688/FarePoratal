class Manager {
    constructor(inputName) {
        this.name = inputName;
        this.getOther = function() {
            console.log("hello")
        }
    }
    getData() {
        console.log(this.name)
    }
}

var obj1 = new Manager("TechnoFunnel");
var obj2 = new Manager("TechnoFunnel12");
var obj3 = new Manager("TechnoFunnel23");

// Inheritence = Protypical Chaining

obj1.getData()
obj2.getData()
obj3.getData()
obj3.getData.call(window);
Manager.prototype.getData.call(window)
Manager.prototype.getData.call({name: "random"})

obj1.toString()

debugger;