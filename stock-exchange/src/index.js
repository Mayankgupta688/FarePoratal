import ReactDOM  from "react-dom";
import ReactComponent from "./classes/UpdateClockComponent";

var userInfo = {
    name: "Mayank",
    designation: "Trainer",
    salary: 20,
    address: "A-8",
    street: "Rohini",
    city: "Banglore",
    country: "India"
}

ReactDOM.createRoot(document.getElementById("root")).render((
    <section>
        <ReactComponent userName="TechnoFunnel"></ReactComponent>
    </section>
))