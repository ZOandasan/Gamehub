export default function DealerCard({ card, index, play}) {
  let renderedCard = <div className={`card ${card.face}`}></div>

  if (!index && !play){
    return (
      <span>
        <div className="card back-blue"></div>
      </span>
    );
  } else {
    return (
      <span>
        {renderedCard}
      </span>
    );
  }
}
  