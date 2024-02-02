window.name = "TechnoFunnel"
 
function a() {
    var name = "Mayank";
    var age = 10
    
    console.log(age);
 
    function b() {
        console.log(name);
    }
 
    function c() {
        console.log("User Name is: " + name);
    }
 
    return {
        b: b,
        c: c
    };
}
 
var inputData = a();
 
inputData.b(); // Output 1
inputData.c(); // Output 1
console.log(inputData.name) // Output 1