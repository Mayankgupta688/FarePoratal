// https://prod.liveshare.vsengsaas.visualstudio.com/join?97546200056E89E17F26B9F2FB54DCDD602E

import { useState } from "react";

export default function DisplayTimeComponentHooks() {

    var [currentTime, setCurrentTime] = useState(returnCurrentTime());
    var [currentCounter, setCurrentCounter] = useState(0);
    
    function returnCurrentTime() {
        return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }
    
    setTimeout(function getLastData() {
        setCurrentTime(returnCurrentTime());
        setCurrentCounter(currentCounter + 1)
        console.log(currentTime);
    }, 1000);
    
    return (
        <div>
            <h1>Current Time is {currentTime} {currentCounter}</h1>
        </div>
    )
}