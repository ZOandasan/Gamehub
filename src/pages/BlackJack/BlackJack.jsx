import '../../CardCSS/css/cardstarter.min.css'
import { useState } from "react";
import WinLoss from "./Win-Loss/Win-Loss";
import Header from "./Header/Header";
import ButtonControl from "./ButtonControl/ButtonControl";
import DealerHand from "./DealerHand/DealerHand";
import PlayerHand from "./PlayerHand/PlayerHand";
import GameText from "./GameText/GameText";

export default function Blackjack() {
  const suits = ["s", "c", "d", "h"];
  const ranks = [
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  const masterDeck = buildMasterDeck();

  const [deck, setDeck] = useState();
  const [playerTotal, setPlayerTotal] = useState();
  const [dealerTotal, setDealerTotal] = useState();
  const [playerWins, setPlayerWins] = useState(0);
  const [dealerWins, setDealerWins] = useState(0);
  const [play, setPlay] = useState(1);
  const [bet, setBet] = useState();
  const [playerHand, setPlayerHand] = useState();
  const [dealerHand, setDealerHand] = useState();
  const [funds, setFunds] = useState(1000);

  function buildMasterDeck() {
    const deck = [];
    suits.forEach(function (suit) {
      ranks.forEach(function (rank) {
        deck.push({
          face: `${suit}${rank}`,
          value: Number(rank) || (rank === "A" ? 11 : 10)
        });
      });
    });
    return deck;
  }

  function getNewShuffledDeck() {
    const tempDeck = [...masterDeck];
    const newShuffledDeck = [];
    while (tempDeck.length) {
      const rndIdx = Math.floor(Math.random() * tempDeck.length);
      newShuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
    }
    return newShuffledDeck;
  }

  function dealInitCards(shuffledDeck) {
    let initPlayerHand = [];
    initPlayerHand.unshift(shuffledDeck.pop());
    initPlayerHand.unshift(shuffledDeck.pop());
    setPlayerHand(initPlayerHand);
    determinePoints(initPlayerHand, setPlayerTotal);

    let initDealerHand = [];
    initDealerHand.unshift(shuffledDeck.pop());
    initDealerHand.unshift(shuffledDeck.pop());
    setDealerHand(initDealerHand);
    determinePoints(initDealerHand, setDealerTotal);

    setDeck(shuffledDeck);
  }

  function resetGame() {
    setBet(0);
    setPlay(0);
    setPlayerHand([]);
    setDealerHand([]);
    runGame();
  }

  function runGame() {
    let shuffledDeck = getNewShuffledDeck();
    dealInitCards(shuffledDeck);
  }

  function forfeitGame() {
    setDealerWins(dealerWins + 1);
    setPlay(-1);
  }

  function getHit() {
    let newHand = [];
    while (playerHand.length > 0) {
      newHand.unshift(playerHand.pop());
    }
    newHand.unshift(deck.pop());
    setPlayerHand(newHand);
    let newTotal = determinePoints(newHand, setPlayerTotal);
    if (newTotal > 21) {
      forfeitGame();
    }
  }

  function stand() {
    let newHand = [];
    for (let i = 0; i < dealerHand.length; ++i) {
      newHand.unshift(dealerHand[i]);
    }
    let newTotal = determinePoints(newHand, setDealerTotal);
    while (newTotal < 17) {
      newHand.unshift(deck.pop());
      setDealerHand(newHand);
      newTotal = determinePoints(newHand, setDealerTotal);
    }
    checkWinner();

    function checkWinner() {
      if (newTotal > 21) {
        winGame();
      } else if (newTotal > playerTotal) {
        forfeitGame();
      } else if (newTotal < playerTotal) {
        winGame();
      } else {
        tieGame();
      }
    }

    function winGame() {
      setPlayerWins(playerWins + 1);
      setPlay(1);
    }

    function tieGame() {
      setPlay(2);
      setFunds(funds + bet + bet)
    }
  }

  function determinePoints(hand, setTotal) {
    let newTotal = 0;

    hand.forEach(function (card) {
      newTotal += card.value;
    });

    newTotal = handleAces(hand, newTotal);
    setTotal(newTotal);
    return newTotal;

    function handleAces(hand, total) {
      hand.forEach(function (card) {
        if (card.value > 10 && total > 21) {
          total -= 10;
        }
      });
      return total;
    }
  }

  return (
    <div>
      <Header />
      <WinLoss playerWins={playerWins} dealerWins={dealerWins} />
      <GameText play={play} bet={bet} />
      <DealerHand dealerHand={dealerHand} bet={bet} dealerTotal={dealerTotal} play={play}/>
      <PlayerHand playerHand={playerHand} bet={bet} playerTotal={playerTotal} />
      <ButtonControl
        resetGame={resetGame}
        play={play}
        setPlay={setPlay}
        bet={bet}
        setBet={setBet}
        dealerWins={dealerWins}
        setDealerWins={setDealerWins}
        getHit={getHit}
        stand={stand}
        forfeitGame={forfeitGame}
      />
    </div>
  );
}
