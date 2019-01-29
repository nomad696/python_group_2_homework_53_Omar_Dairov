import React, { Component } from 'react';
import './App.css';
import First from './Components/First/First';
import Second from './Components/Second/Second';
import Third from './Components/Third/Third'
import Fourth from "./Components/Fourth/Fourth";
import Fifth from "./Components/Fifth/Fifth";

class App extends Component {
  render() {
    return (
      <div className="App">
            <First/>
            <Second/>
            <Third/>
            <Fourth/>
            <Fifth/>
        <div>
          <button>Новые цифры</button>
        </div>
      </div>
    );
  }
}

export default App;
