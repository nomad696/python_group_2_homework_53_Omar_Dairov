import React, { Component } from 'react';
import './First.css'

class First extends Component {
    render() {
        return (
            <div className='first'>
                <p>Random number: {Math.floor(Math.random() * 36) +1}</p>
            </div>
        );
    }
}

export default First