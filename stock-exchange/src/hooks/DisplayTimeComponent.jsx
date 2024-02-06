// https://prod.liveshare.vsengsaas.visualstudio.com/join?97546200056E89E17F26B9F2FB54DCDD602E
export default function DisplayTimeComponent() {
    function returnCurrentTime() {
        return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }

    var currentTime = returnCurrentTime();
    
    setInterval(function getLastData() {
        currentTime = returnCurrentTime();
        console.log(currentTime);
    }, 1000)
    
    return <h1>Current Time is {currentTime}</h1>
}