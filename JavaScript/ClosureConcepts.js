window.userName = "TechnoFunnel"

function a() {

    console.log(window)
    var name = "Mayank";

    function b() {
        var name = "B";

        function c () {
            var name = "c";

            function d() {
                console.log(name);
                console.log(userName)
                console.log(window)
            }

            d();
            console.log(name);
        }

        c();
        console.log(name);
    }
    b()
    console.log(name);
}

a()
console.log(name);