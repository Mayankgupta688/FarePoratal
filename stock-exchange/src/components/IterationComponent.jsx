export default function IterationComponent() {
    var employeeNames = [{
        name: "Mayank",
        age: 30,
        designation: "Trainer"
    }, {
        name: "Anshul",
        age: 37,
        designation: "Trainer"
    }, {
        name: "Aniket",
        age: 31,
        designation: "Trainer"
    }, {
        name: "Meha",
        age: 35,
        designation: "Trainer"
    }, {
        name: "Aniket",
        age: 40,
        designation: "Trainer"
    }];
    
    function employeeNameJsx() {
        return employeeNames.map(employee => (
            <div>
                <h3>Employee Name : {employee.name}</h3>
                <h3>Employee Name : {employee.name}</h3>
                <h3>age : {employee.age}</h3>
                <h3>designation : {employee.designation}</h3><hr/>
            </div>
        ));
    }
    function employeeNameJsxOther() {
        var employeeJSX = [];
        employeeNames.map(employee => {
            employeeJSX.push((
                <div>
                    <h3>Employee Name : {employee.name}</h3>
                    <h3>Employee Name : {employee.name}</h3>
                    <h3>age : {employee.age}</h3>
                    <h3>designation : {employee.designation}</h3><hr />
                </div>
            ));
        })
        return employeeJSX;
    };
    
    return (
        <div>
            <h1>Total Number of Employees: {employeeNames.length}</h1>
            <h2>Following is the List of Employees in the company: </h2><hr/>
            { employeeNameJsx() }
        </div>
    )
}