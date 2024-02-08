import { useState } from "react";

export default function UpdateCounter() {
    var [count, setCounter]  = useState(100);  // getter, setter
    var [empDetails, setEmpDetails] = useState({
        userName: "Mayank",
        userDesignation: "trainer",
        userAge: 10
    })
    function incrementCounter() {
        // setCounter(counter + 1);
        setCounter((oldCounterValue) => {
            if (oldCounterValue == 10) {
                return 100;
            }
            return oldCounterValue + 1;
        });
    }
    
    function changeName() {
        // Immutability = Object should not be mutated...
        
        var newObject = {
            ...empDetails,
            userName: "TechnoFunnel"
        }
        
        setEmpDetails(newObject)
    }
    
    return (
        <div>
            <h1>The Counter is {count}</h1>
            <input type="button" onClick={incrementCounter} value="Increment" /><hr />
            
            <div>
                <h1>The Employee Name is {empDetails.userName}</h1>
                <h2>The Employee designation is {empDetails.userDesignation}</h2>
                <h3>The Employee Age is {empDetails.userAge}</h3>
                <input type="button" onClick={changeName} value="Change Name" /><hr />
            </div>
        </div>
    )
}