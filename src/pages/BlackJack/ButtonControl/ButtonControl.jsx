import BetForm from "./BetForm/BetForm";

export default function ButtonControl({
  play,
  setPlay,
  bet,
  setBet,
  resetGame,
  dealerWins,
  setDealerWins,
  getHit,
  stand,
  forfeitGame
}) {
  if (play !== 0) {
    return <button onClick={() => resetGame()}>Reset</button>;
  } else if (!bet) {
    return <BetForm bet={bet} setBet={setBet} />;
  } else {
    return (
      <>
        <div>
          <button onClick={() => getHit()}>Hit</button>
          <button onClick={() => stand()}>Stand</button>
        </div>
        <button onClick={() => forfeitGame()}>Forfeit</button>
      </>
    );
  }
}
