import DealerCard from "./DealerCard/DealerCard";

export default function DealerHand({ dealerHand, bet, play }) {
  if (dealerHand && bet) {
    const card = dealerHand.map((c, idx) => <DealerCard key={idx} card={c} index={idx} play={play}/>);
    return <>{card}</>;
  } else if (bet) {
    return <p>No Cards</p>;
  } else {
    return <></>;
  }
}
