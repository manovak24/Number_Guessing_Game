import React from 'react';
import Game from './game';
import './game-container.css';

class GameContainer extends React.Component {
    render() {
        return (
            <div className="body">
                <h1 className="title">Number Guessing Game</h1>

                <div className="instructions">
                <div className="instruction">
                    <h3>Step 1</h3>
                    <p>Select a number between 1 and 10</p>
                </div>
                <div className="instruction">
                    <h3>Step 2</h3>
                    <p>Click "Make a Guess" to submit your guess</p>
                </div>
                <div className="instruction">
                    <h3>Step 3</h3>
                    <p>Click "Compare!" to determine the winner</p>
                </div>
                <div className="instruction">
                    <h3>Step 4</h3>
                    <p>Click "Next Round" to advance to next round</p>
                </div>
                </div>

                <div className="game-container">
                
                <Game />
                
                </div>
             </div>
        )
    }
}

export default GameContainer;