import React from 'react';
import { FaUser, FaFlag } from 'react-icons/fa';

const PlayerCard = ({ player, onChoosePlayer }) => {
  return (
    <div className="player-card bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all border-2" style={{ width: '400px', height: '550px' }}>
      <img src={player.image} alt={player.name} className="object-cover rounded-t-lg" style={{ width: '100%', height: '250px' }} />

      <div className="mt-4 px-4">
        <div className="flex items-center space-x-2">
          <FaUser className="text-gray-500" />
          <h3 className="text-lg font-bold">{player.name}</h3>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <div className="flex items-center space-x-2 mt-1">
            <FaFlag className="text-gray-500" />
            <p className="text-sm text-gray-900 font-bold">{player.country}</p>
          </div>
          <div className="mt-2">
            <span className="px-3 py-1 text-sm bg-gray-200 text-gray-600 rounded-full">{player.role}</span>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm font-bold text-left mb-2">Rating</p>
          <div className="flex justify-between items-center my-2 mt-2">
            <p className="text-sm font-bold">{player.handType}</p>
            <p className="text-sm text-gray-500">{player.handType}</p>
          </div>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-sm font-semibold">Price:<span className="text-gray-900">{player.price}$</span></p>
          <button
            onClick={() => onChoosePlayer(player)}         
            className="px-3 py-1 text-sm bg-gray-200 mt-2 text-gray-600 rounded-full transition-all duration-300 hover:bg-[#E7FE29]  hover:font-bold"
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;



