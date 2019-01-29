import React, { Component} from 'react';
import './Second.css'

class Second extends Component {
    render() {
        return(
            <div className='second'>
                <p>Second number: {Math.floor(Math.random() * 36) +1}</p>
            </div>
        );
    }
}

export default Second