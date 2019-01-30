import React, { Component } from 'react';
import './App.css';
import First from './Components/First/First';

class App extends Component {

    state = {
        numbers: [
            1,
            2,
            3,
            4,
            5
        ]
    };

  generateNumbers = () => {
      let numbers = []
      for (let i = 0; i < 5; i++) {
          let number = Math.floor(Math.random() * 31) + 5;
          if (numbers.indexOf(number) > -1){
              i-=1
          }
          else {
              numbers.push(number)
          }
      }
      return numbers.sort(function (a, b) {
          return a-b
      });

  };


    buttonClick = () => {
        console.log('Кнопка нажата, имя меняется');
        let newState = {...this.state};
        newState.numbers = this.generateNumbers();
        this.setState(newState);
    }


  render() {
    return (
      <div className="App">
            <First number={this.state.numbers[0]}/>
            <First number={this.state.numbers[1]}/>
            <First number={this.state.numbers[2]}/>
            <First number={this.state.numbers[3]}/>
            <First number={this.state.numbers[4]}/>


        <div className='button'>
          <button onClick={() => this.buttonClick()}><p>Новые цифры</p></button>
        </div>
      </div>
    );
  }
}

export default App;