export default function WinLoss({ playerWins, dealerWins }) {
    return (
      <div id="bid_header">
        <h1>
          Player Wins = {playerWins} : Dealer Wins = {dealerWins}
        </h1>
      </div>
    );
  }
  