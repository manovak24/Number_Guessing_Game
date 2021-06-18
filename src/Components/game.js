import React, { useState } from 'react';

export default function Game(props) {
    const [clickCount, setClickCount] = useState(0);
    const [round, setRound] = useState(1);
    const [target, setTarget] = useState();
    const [computerGuess, setComputerGuess] = useState();

    const handlePlus = () => {
        setClickCount((prevClickCount) => prevClickCount + 1)
    }

    const handleMinus = () => {
        setClickCount((prevClickCount) => prevClickCount - 1)
    }

    const roundNumber = () => {
        setRound((prevRound) => prevRound + 1)
    }

    const generateTarget = () => {
        setTarget(Math.floor(Math.random() * 10));
    }

    const generateComputerGuess = () => {
        setComputerGuess(Math.floor(Math.random() * 10))
    }

    function randomGenerator() {
        generateTarget();
        generateComputerGuess();
    }


  return (
    <div className="Guesing-area">
        <div className="rounds">
          <p className="Round-label">Round: <span id="round-number">{round}</span></p>
          <p className="guess-label">Taret Number: <span id="target-number">{target}</span></p>
        </div>

        <div className="guess computer-guess">
            <div className="guess-title">
              <p className="guess-label">Computer</p>
              <p className="score-labe">Score: <span id="computer-score">0</span></p>
            </div>
            <p id="computer-guess">Computer Guess: {computerGuess}</p>
            <p className="winning-text" id="computer-wins"></p>
        </div>


        <div className="guess human-guess">
            <div className="guess-title">
              <p className="guess-label">You</p>
              <p className="score-label">Score: <span id="human-score">0</span></p>
            </div>
            <div>
                <input id="human-guess" value={clickCount} />
            </div>
            <div className="number-controls">
                <button
                className="number-control left" 
                id="subtract" 
                onClick={handlePlus} 
                disabled={clickCount > 9}>+</button>
                <button 
                className="number-control right" 
                id="add" 
                onClick={handleMinus} 
                disabled={clickCount <= 0}>-</button>
            </div>
            <button className="button" id="guess" onClick={randomGenerator}>Make a Guess!</button>
        </div>

        <div className="next-round-container" onClick={roundNumber}>
            <button className="button" id="next-round" >Next Round</button>
        </div>
    </div>
  );
}