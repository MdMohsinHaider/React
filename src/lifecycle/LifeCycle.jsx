import React, { Component } from 'react'

export default class LifeCycle extends Component {

    // state = {value:0};

    // componentDidMount(){
    //     console.log("Mounting Phase");
    // }

    componentDidMount(){
        console.log("Mounting Phase");
        this.s1 = setInterval(()=>{
            console.log("Hello");
        },2000);
    }

    componentDidUpdate(){
        console.log("Updating Phase");
    }

    componentWillUnmount(){
        console.log("Unmountiong phase");
        clearInterval(this.s1);
    }

    constructor(){
        super();
        console.log("I am Constructor");
        this.state = {value:0};
    }

    getSnapshotBeforeUpdate(props,states){
        console.log("before Update ",states);
        return null;
    }

    render() {
        console.log("I am Render");
        
        return (
            <div>
                <h1>Life Cycle Methiod{this.state.value}</h1>
                <button onClick={()=> this.setState({value:this.state.value+1})}>click</button>
            </div>
        )
    }
}

/*
Mounting 
Update
UnMounting
*/ 
