import React, { Component } from 'react';

class Button extends Component {

    generateNumber = () => {
        this.props.generate()
    }

    render () {
        return (
            <button onClick={this.generateNumber}>Losuj liczbę</button>
        )
    }
}

export default Button;