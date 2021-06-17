import React from 'react';
import './App.css';
import Game from './Components/game';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      humanGuess: ''
    }

    this.handleChange = this.handleChange.bind(this);
    //this.handleAddButton = this.handleAddButton.bind(this);
    //this.handleSubtractButton = this.handleSubtractButton.bind(this);
  }
  
  handleChange = (humanGuess) => {
    this.setState({ humanGuess })
  }

  /*handleAddButton() {
    let addGuess = this.state.humanGuess;
    this.setState({
      humanGuess: +addGuess + 1
    })
  }

  handleSubtractButton() {
    let minusGuess = this.state.humanGuess;
    this.setState({
      humanGuess: +minusGuess - 1
    })
  }*/

  render() {
    return (
      <div className="game-container">
        <header>
          <h1>Number Guessing Game</h1>
        </header>

        

        <div className="Guesing-area">
          

          

            <Game />
            

            
            
        </div>

        <div className="instructions">
          <div className="instruction">
            <h3>Step 1</h3>
            <p>Input a number between 0 and 9</p>
          </div>
          <div className="instruction">
            <h3>Step 2</h3>
            <p>Click "Make a Guess" to submit your guess and see who won the round.</p>
          </div>
          <div className="instruction">
            <h3>Step 3</h3>
            <p>Click "Next Round" to play again.</p>
          </div>
        </div>
        
      </div>
    )
  }
  
}

export default App;