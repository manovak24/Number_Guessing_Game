import React from 'react';
import './App.css';
import Counter from './Components/test';

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

        <div className="rounds">
          <p className="Round-label">Round <span id="round-number">1</span></p>
          <p className="guess-label">Taret Number: <span id="target-number">?</span></p>
        </div>

        <div className="Guesing-area">
          <div className="guess computer-guess">
            <div className="guess-title">
              <p className="guess-label">Computer</p>
              <p className="score-labe">Score: <span id="computer-score">0</span></p>
            </div>
            <p id="computer-guess">?</p>
            <p className="winning-text" id="computer-wins"></p>
          </div>

          <div className="guess human-guess">
            <div className="guess-title">
              <p className="guess-label">You</p>
              <p className="score-label">Score: <span id="human-score">0</span></p>
            </div>

            <Counter
            onUpdate={this.handleChange} />
            
            <p>{this.state.humanGuess}</p>
            <input 
              type="number" 
              id="human-guess"
              name='humanGuess'
              min={0}
              max={9}
              
              value={this.state.humanGuess}
              />

            <div className="number-controls">
              <button className="number-control left" id="subtract" onClick={this.handleSubtractButton}>-</button>
              <button className="number-control right" id="add" onClick={this.handleAddButton}>+</button>
            </div>
            <button className="button" id="guess">Make a Guess</button>
          </div>
        </div>

        <div className="next-round-container">
          <button className="button" id="next-round" disabled>Next Round</button>
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