import React from 'react';
import './SelectedPlayers.css'; // Add your styles in this file
import { FaTrashAlt } from 'react-icons/fa'; // Importing the delete icon from react-icons

const SelectedPlayers = ({ players, onRemovePlayer }) => (
  <div className="selected-players">
    {players.map(player => (
      <div key={player.playerId} className="selected-player-card">
        <div className="player-info">
          <img src={player.image} alt={player.name} className="player-avatar" />
          <div className="player-details">
            <h3 className="player-name">{player.name}</h3>
            <p className="player-role">{player.role}</p>
          </div>
        </div>
        <FaTrashAlt 
          className="remove-icon" 
          onClick={() => onRemovePlayer(player.playerId)} 
          title="Remove player" 
        />
      </div>
    ))}
  </div>
);

export default SelectedPlayers;
