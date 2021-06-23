import React from 'react';
import './App.css';
import Game from './Components/game';

class App extends React.Component {
  
  render() {
    return (
      <div className="body">

        <div className="game-container">
          <header>
            <h1 className="title">Number Guessing Game</h1>
          </header>

          <Game />

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

      </div>
    )
  }
  
}

export default App;