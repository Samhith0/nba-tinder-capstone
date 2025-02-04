import React, { useState } from 'react';
import './App.css';

const nbaPlayers = ["LeBron James", "Stephen Curry", "Kevin Durant", "Giannis Antetokounmpo", "Luka Dončić"];
const wnbaPlayers = ["Sue Bird", "Diana Taurasi", "Candace Parker", "Breanna Stewart", "A'ja Wilson"];

const getRandomMatchPercentage = () => Math.floor(Math.random() * 101);

const App: React.FC = () => {
  const [nbaPlayer, setNbaPlayer] = useState(nbaPlayers[0]);
  const [wnbaPlayer, setWnbaPlayer] = useState(wnbaPlayers[0]);
  const [matchPercentage, setMatchPercentage] = useState<number | null>(null);
  const [helloMessage, setHelloMessage] = useState<string>('');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const fetchHello = () => {
    fetch("http://127.0.0.1:5000/hello")
      .then(response => response.json())
      .then(data => setHelloMessage(data.message))
      .catch(error => console.error("Error fetching hello message:", error));
  };

  const fetchStatus = () => {
    fetch("http://127.0.0.1:5000/status")
      .then(response => response.json())
      .then(data => setStatusMessage(data.status))
      .catch(error => console.error("Error fetching status:", error));
  };

  const handleMatch = () => {
    setMatchPercentage(getRandomMatchPercentage());
  };

  return (
    <header className="App-header">
      <div className="App">
          <div className="flex justify-center items-center h-screen">
          <img 
            src="https://i.scdn.co/image/ab67616d00001e025c421ed3721b09aade087582" 
            onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/150")} 
            alt="LeBron James" 
          />
          </div>
          <h1>NBA & WNBA Matchmaker</h1>
          <button onClick={fetchHello}>Fetch Hello</button>
          <p>{helloMessage}</p>
          <button onClick={fetchStatus}>Fetch Status</button>
          <p>Status: {statusMessage}</p>
          
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
