// https://prod.liveshare.vsengsaas.visualstudio.com/join?E91B5B1E68595605200E2B78EAF19A32499C
import { Component } from "react";

export default class UpdateClockComponent extends Component {
    returnCurrentTime() {
        return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }
    
    userName = "Mayank Gupta";
    
    constructor(props) {
        super(props);
        
        this.state = {
            currentTime: this.returnCurrentTime(),
            counter: 1,
            applicationUser: "Random"
        }
    }
    
    updateValue = (event) => {
        this.setState({
            applicationUser: event.target.value
        })
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.counter % 40 == 0) {
            return false;
        }
        return true;
    }
    
    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    
    render() {
        return (
            <div>
                Enter Name: <input value={this.state.applicationUser} onChange={this.updateValue} type="text" /><br /><br/>
                <b>Entered Name is: {this.state.applicationUser}</b>
                <h1>The Current Time for {this.userName} is {this.state.currentTime}</h1>
                <h2>Props Value: {this.props.userName} {this.state.counter}</h2>
                <input type="button" value="Click to Update Counter" onClick={this.incrementCounter} />
            </div>
        )
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                currentTime: this.returnCurrentTime()
            })
        }, 1000);
    }
}