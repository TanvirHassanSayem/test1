import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PlayerCard from './PlayerCard';
import SelectedPlayers from './SelectedPlayers';
import playersData from '../data/players.json';

import 'react-toastify/dist/ReactToastify.css';

const Main = ({ coins, selectedPlayers, onChoosePlayer, onRemovePlayer }) => {
  const [showAvailable, setShowAvailable] = useState(true);

  const handleChoosePlayer = (player) => {
    if (coins < player.price) {
      toast.error('Not enough coins!', {
        position: "top-center",
      });
      return;
    }
    if (selectedPlayers.length >= 6) {
      toast.error('You can only select up to 6 players.', {
        position: "top-center",
      });
      return;
    }
    if (selectedPlayers.some(p => p.playerId === player.playerId)) {
      toast.error('Player already selected!', {
        position: "top-center",
      });
      return;
    }

    onChoosePlayer(player);
    toast.success(`Congrats !! ${player.name} added to your Squad`, {
      position: "top-center",
    });
  };

  const handleAddMorePlayers = () => {
    setShowAvailable(true);
  };

  return (
    <div className="main-section p-5 border border-gray-200 rounded-lg shadow-lg bg-white mb-40 w-9/12 mx-auto">
      <div className="flex justify-between m-4">
        <div>
          <p className="font-bold text-[28px]">Available Players</p>
        </div>

        <div className="toggle-buttons mb-5">
          <button
            onClick={() => setShowAvailable(true)}
            className={`btn mr-2 ${showAvailable ? 'bg-[#E7FE29] text-gray-800 rounded-lg decoration-black' : 'bg-gray-300 text-gray-600'}`}
          >
            Available
          </button>
          <button
            onClick={() => setShowAvailable(false)}
            className={`btn ${!showAvailable ? 'bg-[#E7FE29] text-gray-800 rounded-lg decoration-black' : 'bg-gray-300 text-gray-600'}`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {showAvailable ? (
        <div>
          <div className="player-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-between">
            {playersData.map(player => (
              <PlayerCard key={player.playerId} player={player} onChoosePlayer={handleChoosePlayer} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <SelectedPlayers players={selectedPlayers} onRemovePlayer={onRemovePlayer} />
          <div className="mt-4">
            <button
              onClick={handleAddMorePlayers}
              className="px-4 py-2 bg-[#E7FE29] border-4 text-gray-800 text-black font-bold rounded-lg transition-all"
            >
              Add More Players
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
