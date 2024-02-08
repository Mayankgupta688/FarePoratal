import { useState, useEffect } from "react";

export default function WorkingWithCounter() {

    var [counter, setCounter] = useState(0);
    
    function incrementCounter() {
        
        // setCounter(counter + 1)
        
        setCounter((initialCounterValue) => {
            return initialCounterValue + 1
        })
    }
    
    setTimeout(() => {
        setCounter((initialCounterValue) => {
            return initialCounterValue + 1
        })
    }, 1000)
    
    return (
        <div>
            <h1>Counter Value is {counter}</h1>
            <input type="button" value="Increment" onClick={incrementCounter} />
        </div>
    )
    
}