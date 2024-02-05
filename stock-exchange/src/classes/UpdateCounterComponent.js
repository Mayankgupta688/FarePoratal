import React from 'react';

export default class UpdateCounterComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 1
        }
    }
    
    updateCounterOne = () => {
        
        this.setState({
            counter: this.state.counter + 1
        }, () => {
            setTimeout(() => {
                this.setState({
                    counter: this.state.counter + 2
                }, () => {
                    this.setState({
                        counter: this.state.counter + 3
                    }, () => {
                        this.setState({
                            counter: this.state.counter + 4
                        })
                    })
                })
            }, 3000)
            
        });
    }
    
    updateCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
        
        this.setState({
            counter: this.state.counter + 2
        })
        
        this.setState({
            counter: this.state.counter + 3
        })
        
        this.setState({
            counter: this.state.counter + 4
        })
    }

    render() {
        return (
            <div>
                <h1>The Counter Value is: {this.state.counter}</h1>
                <input type="button" value="Update Counter" onClick={this.updateCounterOne} />
            </div>
        )
    }
}