import React, { Component } from 'react';
import Display from '../Display/Display';
import Button from '../Button/Button';
import './Random.css';

class Random extends Component {

    constructor() {
        super();

        this.state = {
            randomNumber: 0
        }
    }

    generateRandomNumber = () => {
        const newNumber= Math.random();

        this.setState((prevState)=> ({
            randomNumber: prevState.randomNumber + newNumber
        }));
    }

    componentDidMount () {
        this.generateRandomNumber();
    }

    render () {
        return (
            <div className="random-container">
                <Display number={this.state.randomNumber}/>
                <Button generate={this.generateRandomNumber}/>
            </div>
        )
    }
}

export default Random;