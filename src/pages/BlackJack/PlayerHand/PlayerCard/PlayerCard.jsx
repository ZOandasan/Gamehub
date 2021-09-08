export default function PlayerCard({ card }) {
  let renderedCard = <div className={`card ${card.face}`}></div>

  return (
    <span>
      {renderedCard}
    </span>
  );
}
  