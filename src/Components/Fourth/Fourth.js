import React, {Component} from 'react';
import './Fourth.css';

class Fourth extends Component {
    render() {
        return(
            <div>
                <p>Fourth number: {Math.floor(Math.random()*36) +1}</p>
            </div>
        );
    }
}

export default Fourth