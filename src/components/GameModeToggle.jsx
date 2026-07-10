import React, { useState } from 'react';
import './GameModeToggle.css';

const GameModeToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleGameMode = () => {
    setIsOn(!isOn);
    // You can dispatch an event or use context here to notify the canvas/app
    // that game mode is active, e.g. changing the simulation physics.
  };

  return (
    <div className="game-toggle-fixed">
      <button 
        className={`game-toggle-btn ${isOn ? 'game-toggle-btn--on' : ''}`}
        onClick={toggleGameMode}
      >
        <span className="game-toggle-indicator"></span>
        Game Mode
      </button>
    </div>
  );
};

export default GameModeToggle;
