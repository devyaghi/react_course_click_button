import React from "react";
export default class SayHello extends React.Component{

    print(){
        console.log("hello");
    }

    render() {

        return (<button onClick={this.print}>Say Hello</button>)
    }
}