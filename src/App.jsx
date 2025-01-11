import React, { useState } from 'react';
import Banner from './components/Banner.jsx';
import Navbar from './components/Navbar.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const addCoins = () => {
    setCoins(coins + 100);
  };

  const choosePlayer = (player) => {
    if (coins >= player.price) {
      setSelectedPlayers([...selectedPlayers, player]);
      setCoins(coins - player.price);
    } else {
      alert('Not enough coins!');
    }
  };

  const removePlayer = (playerId) => {
    const playerToRemove = selectedPlayers.find(p => p.playerId === playerId);
    setSelectedPlayers(selectedPlayers.filter(p => p.playerId !== playerId));
    if (playerToRemove) {
      setCoins(coins + playerToRemove.price);
    }
  };

  return (
    <div className="app">
      <Navbar coins={coins} />
      <Banner onAddCoins={addCoins} />
      <Main 
        coins={coins} 
        selectedPlayers={selectedPlayers} 
        onChoosePlayer={choosePlayer} 
        onRemovePlayer={removePlayer} 
      />
      <Footer />
    </div>
  );
};

export default App;
