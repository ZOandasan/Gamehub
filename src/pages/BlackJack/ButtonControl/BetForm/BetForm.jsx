import { useState } from "react";

export default function BetForm({ bet, setBet }) {
  const [newBet, setNewBet] = useState(0);

  function setCurrentBet(value) {
    if (value + newBet > 0) {
      setNewBet(value + newBet);
    } else {
      setNewBet(0);
    }
  }

  function confirmBet() {
    if (newBet > 0) {
      setBet(newBet);
    }
  }

  return (
    <div>
      <div>
        <button onClick={() => setCurrentBet(250)}>+250</button>
        <button onClick={() => setCurrentBet(50)}>+50</button>
        <button onClick={() => setCurrentBet(10)}>+10</button>
        <span> {newBet} </span>
        <button onClick={() => setCurrentBet(-10)}>-10</button>
        <button onClick={() => setCurrentBet(-50)}>-50</button>
        <button onClick={() => setCurrentBet(-250)}>-250</button>
      </div>
      <button onClick={() => confirmBet()}>Set Bet</button>
    </div>
  );
}
