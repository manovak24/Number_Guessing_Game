import React, { useState } from 'react';

export default function Game(props) {
    const [clickCount, setClickCount] = useState(0);
    const [round, setRound] = useState(1);

    const handlePlus = () => {
        setClickCount((prevClickCount) => prevClickCount + 1)
    }

    const handleMinus = () => {
        setClickCount((prevClickCount) => prevClickCount - 1)
    }

    const roundNumber = () => {
        setRound((prevRound) => prevRound + 1)
    }

    

  return (
    <div>
        <div className="rounds">
          <p className="Round-label">Round <span id="round-number">{round}</span></p>
          <p className="guess-label">Taret Number: <span id="target-number">?</span></p>
        </div>

        <div>
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
                disabled={clickCount <= 1}>-</button>
            </div>
            <button className="button" id="guess">Make a Guess!</button>
        </div>

        <div className="next-round-container" onClick={roundNumber}>
            <button className="button" id="next-round" >Next Round</button>
        </div>
    </div>
  );
}