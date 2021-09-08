export default function DealerCard({ card, index}) {
  let renderedCard = <div className={`card ${card.face}`}></div>

  if (!index){
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
  