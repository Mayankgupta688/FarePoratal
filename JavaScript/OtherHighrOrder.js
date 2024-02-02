function a(someFunction, someOtherFunction) {
    someFunction();
    someOtherFunction();
}


a(function x() {
    console.log("Hello")
}, function y() {
    console.log("All")
});

a(() => {

    (() => {
        throw new Error("dfkhsb")
    })()
    
    
    
    console.log("Hello")
}, () => {
    console.log("All")
});