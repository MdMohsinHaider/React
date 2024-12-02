import { Component } from "react";

class Statesincbc extends Component{
    state = {count :0}; // initializing state
    updateState = () =>{
        console.log("Update State");
        this.setState({count:this.state.count+1});
    }

    updateStateD = () =>{
        console.log("decremen");
        if (this.state.count >0){
            this.setState({count:this.state.count-1});        
        }
    }
    updateStateReset = () =>{
        console.log("Reset");
        this.setState({count:this.state.count*0});        
    }

    render(){
        return(
            <div>
                <h1>State in Class Bassed</h1>
                <h2>
                    Counter <mark>{this.state.count}</mark>
                </h2>

                <button onClick={this.updateState} >increment</button>
                <button onClick={this.updateStateD} >decremen</button>
                <button onClick={this.updateStateReset} >Reset</button>
            </div>
        );
    }
}

export default Statesincbc;