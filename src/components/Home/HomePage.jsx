import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [voteCountA, setVoteCountA] = useState(0);
  const [voteCountB, setVoteCountB] = useState(0);
  const [winner, setWinner] = useState('No winner yet');

  const vote = (option) => {
    if (option === 'A') {
      setVoteCountA(voteCountA + 1);
    } else if (option === 'B') {
      setVoteCountB(voteCountB + 1);
    }

    updateWinner();
  };

  const updateWinner = () => {
    if (voteCountA > voteCountB) {
      setWinner('Option A is winning');
    } else if (voteCountB > voteCountA) {
      setWinner('Option B is winning');
    } else {
      setWinner('No winner yet');
    }
  };

  return (
    <div>
      <header>
        <h1>Polling Website</h1>
      </header>

      <main>
        <div className="poll-container">
          <div>
            <h2>Option A</h2>
            <button className="vote-btn" onClick={() => vote('A')}>Vote for A</button>
            <p className="vote-count">Votes: {voteCountA}</p>
          </div>

          <div>
            <h2>Option B</h2>
            <button className="vote-btn" onClick={() => vote('B')}>Vote for B</button>
            <p className="vote-count">Votes: {voteCountB}</p>
          </div>
        </div>

        <div className="winner">{winner}</div>
      </main>
    </div>
  );
};

export default HomePage;
