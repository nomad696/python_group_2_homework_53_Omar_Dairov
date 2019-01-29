import React, {Component} from 'react';
import './Fifth.css'

class Fifth extends Component {
    render() {
        return(
            <div>
                <p>Fifth number: {Math.floor(Math.random()*36) +1}</p>
            </div>
        )
    }
}

export default Fifth