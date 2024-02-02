window.name = "TechnoFunnel"

function a() {

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

inputData.b();
inputData.c();
