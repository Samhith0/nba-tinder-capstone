import React, { useState } from 'react';
import './App.css';

const nbaPlayers = ["LeBron James", "Stephen Curry", "Kevin Durant", "Giannis Antetokounmpo", "Luka Dončić"];
const wnbaPlayers = ["Sue Bird", "Diana Taurasi", "Candace Parker", "Breanna Stewart", "A'ja Wilson"];

const getRandomMatchPercentage = () => Math.floor(Math.random() * 101);

const App: React.FC = () => {
  const [nbaPlayer, setNbaPlayer] = useState(nbaPlayers[0]);
  const [wnbaPlayer, setWnbaPlayer] = useState(wnbaPlayers[0]);
  const [matchPercentage, setMatchPercentage] = useState<number | null>(null);

  const handleMatch = () => {
    setMatchPercentage(getRandomMatchPercentage());
  };

  return (
    <header className="App-header">
      <div className="App">
          <h1>NBA & WNBA Matchmaker</h1>
          <div>
            <label>NBA Player: </label>
            <select value={nbaPlayer} onChange={(e) => setNbaPlayer(e.target.value)}>
              {nbaPlayers.map((player) => (
                <option key={player} value={player}>{player}</option>
              ))}
            </select>
          </div>
          <div>
            <label>WNBA Player: </label>
            <select value={wnbaPlayer} onChange={(e) => setWnbaPlayer(e.target.value)}>
              {wnbaPlayers.map((player) => (
                <option key={player} value={player}>{player}</option>
              ))}
            </select>
          </div>
          <button onClick={handleMatch}>Find Match</button>
          {matchPercentage !== null && (
            <p>Match Percentage: {matchPercentage}%</p>
          )}
      </div>
    </header>

  );
};

export default App;
