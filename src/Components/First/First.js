import React, { Component } from 'react';
import './First.css'

class First extends Component {
    render() {
        return (
            <div className='first'>
                <p>{this.props.number}</p>
            </div>
        );
    }
}
export default First