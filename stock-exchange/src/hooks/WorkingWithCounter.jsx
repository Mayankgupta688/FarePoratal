import { useState, useEffect } from "react";

export default function WorkingWithCounter() {

    var [counter, setCounter] = useState(0);
    
    useEffect(() => {
        debugger;
        // Runs of Re-rendering and Initial Rendering as well.
        console.log("Hello All, The value has Incremented")
    })
    
    useEffect(() => {
        debugger;
        // Runs of Re-rendering and Initial Rendering as well.
        console.log("Hello All, The value has Incremented - Empty")
        
        setInterval(() => {
            incrementCounter();
        }, 1000)
        
    }, [])
    
    function incrementCounter() {
        setCounter((initialCounterValue) => {
            return initialCounterValue + 1
        })
    }
    
    return (
        <div>
            <h1>Counter Value is {counter}</h1>
            <input type="button" value="Increment" onClick={incrementCounter} />
        </div>
    )
    
}