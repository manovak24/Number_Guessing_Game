import React, { useState } from 'react';

export default function Game(props) {
    const [round, setRound] = useState(1);
    const [target, setTarget] = useState();
    const [humanGuess, sethumanGuess] = useState(0);
    const [computerGuess, setComputerGuess] = useState();
    const [humanScore, setHumanScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);

    const handlePlus = () => {
        sethumanGuess((prevHumanGuess) => prevHumanGuess + 1)
    }

    const handleMinus = () => {
        sethumanGuess((prevHumanGuess) => prevHumanGuess - 1)
    }

    const roundNumber = () => {
        setRound((prevRound) => prevRound + 1);
        sethumanGuess(0);
        setTarget();
        setComputerGuess();
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

    function handleRetry() {
        sethumanGuess(0);
        setRound(1);
        setTarget();
        setComputerGuess();
        setHumanScore(0);
        setComputerScore(0);
    }

   const compareGuesses = (humanGuess, computerGuess, target) => {
       const humanDifference = Math.abs(target - humanGuess);
       const computerDifference = Math.abs(target - computerGuess);
       if(humanDifference > computerDifference) {
           return setComputerScore((prevComputerScore) => prevComputerScore + 1);
       } else if (computerDifference > humanDifference) {
           return setHumanScore((prevHumanScore) => prevHumanScore + 1);
       }
       
   }

   /*const humanIsWinner = compareGuesses(humanGuess, computerGuess, target);
   const winner = humanIsWinner ? 'human' : 'computer';

   const updateScore = winner => {
       if(winner === 'human') {
           setHumanScore((prevHumanScore) => prevHumanScore + 1);
       } else if (winner === 'computer') {
           setComputerScore((prevComputerScore) => prevComputerScore + 1);
       }
   }*/

   function compare() {
       compareGuesses(humanGuess, computerGuess, target);
   }

   

  return (
    <div className="Guesing-area">
        <div className="rounds">
          <p className="Round-label">Round: {round}</p>
          <p className="guess-label">Taret Number: {target}</p>
        </div>

        <div className="guess computer-guess">
            <div className="guess-title">
              <p className="guess-label">Computer</p>
              <p className="score-labe">Score: {computerScore}</p>
            </div>
            <p id="computer-guess">Computer Guess: {computerGuess}</p>
            <p className="winning-text" id="computer-wins"></p>
        </div>


        <div className="guess human-guess">
            <div className="guess-title">
              <p className="guess-label">You</p>
              <p className="score-label">Score: {humanScore}</p>
            </div>
            <div>
                <input id="human-guess" value={humanGuess} />
            </div>
            <div className="number-controls">
                <button
                className="number-control left" 
                id="subtract" 
                onClick={handlePlus} 
                disabled={humanGuess > 9}>+</button>
                <button 
                className="number-control right" 
                id="add" 
                onClick={handleMinus} 
                disabled={humanGuess <= 0}>-</button>
            </div>
            <button className="button" id="guess" onClick={randomGenerator} onChange={compare}>Make a Guess!</button>
        </div>

        <div className="next-round-container" >
            <button className="button" id="next-round" onClick={roundNumber}>Next Round</button>
            <button className="button" id="next-round" onClick={handleRetry}>Start Over</button>
        </div>
    </div>
  );
}