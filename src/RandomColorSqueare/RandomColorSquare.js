import React, { Component } from 'react';
import './RandomColorSquare.css';
class RandomColorSquare extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            backgroundColor: "#FF0000",
        };
    }
  
    randomColor() {
        this.setState({
            backgroundColor: "#" + Math.floor(Math.random()*16777215).toString(16)
        })
    }

    render() {
        return (
            <div className='square' onClick={this.randomColor.bind(this) } style={{ backgroundColor : (this.state.backgroundColor)}}>
            </div>
        );
    }
}

export default RandomColorSquare;