export default function GameText({ play, bet }) {
    if (play === 1) {
      return <p>Winner Winner!</p>;
    } else if (play === -1) {
      return <p>You Lose. Try Again?</p>;
    } else if (play !== 0) {
      return <p>Tie Game</p>;
    } else if (!bet) {
      return <p>How Much are you Betting?</p>;
    } else {
      return <p>Bet: {bet}</p>;
    }
  }
  