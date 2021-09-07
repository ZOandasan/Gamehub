import PlayerCard from "./PlayerCard/PlayerCard";

export default function PlayerHand({ playerHand, bet, playerTotal }) {
  if (playerHand && bet) {
    const card = playerHand.map((c, idx) => <PlayerCard key={idx} card={c} />);
    return (
      <>
        <>{card}</>
        <div>{playerTotal}</div>
      </>
    );
  } else if (bet) {
    return <p>No Cards</p>;
  } else {
    return <></>;
  }
}
