// https://prod.liveshare.vsengsaas.visualstudio.com/join?29D7F396E6672D97350535316C0C3CEE960D

import details from "./employees.json";
import { useState, useEffect } from "react";

export default function EmployeeDetails() {
    
    var [employeeList, setEmployeeList] = useState(details);
    
    function deleteEmployee(employeeId) {
        alert("Deleted: " + employeeId)
    }
    
    function deleteFunction(employeeId) {
        alert("Delete Clicked")
    }
    
    return (
        
        <>
            {employeeList.map((employee) => {
                return (
                    <div className="card" style={{ width: "18rem", display: "inline-block", margin: "10px", padding: "10px" }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYWiJM9gMrv5z-T0IH7AIU0jk8NXRmTYhYGfpobi3ew&s" className="card-img-top" alt="Image" />
                        <div className="card-body">
                            <h5 className="card-title">{employee.name} { 1 + 1 }</h5>
                            <p className="card-text">Employee Created On: {employee.createdAt}.</p>
                            <input type="button" className="btn btn-primary" value="Delete" onClick={function () { deleteEmployee(employee.id) }} />
                            <input type="button" className="btn btn-primary" value="Delete Function" onClick={deleteFunction} />
                        </div>
                    </div>
                )
            })}
        </>
    )
}