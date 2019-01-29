import React, {Component} from 'react';
import './Third.css';


class Third extends Component {
    render() {
        return(
            <div className='third'>
                <p>Third number: {Math.floor(Math.random() * 36) +1}</p>
            </div>
        );
    }
}

export default Third