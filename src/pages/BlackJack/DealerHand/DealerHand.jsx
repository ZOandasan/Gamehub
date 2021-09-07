import DealerCard from "./DealerCard/DealerCard";

export default function DealerHand({ dealerHand, bet }) {
  if (dealerHand && bet) {
    const card = dealerHand.map((c, idx) => <DealerCard key={idx} card={c} />);
    return <>{card}</>;
  } else if (bet) {
    return <p>No Cards</p>;
  } else {
    return <></>;
  }
}