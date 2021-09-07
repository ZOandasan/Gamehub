import "./styles.css";
import { useState } from "react";
import Words from "./Words/Words";
import Alphabet from "./Alphabet/Alphabet";
import WordsList from "./WordsList/WordsList";
import InputGuess from "./InputGuess/InputGuess";

export default function Jotto() {
  const [secret, setSecret] = useState();
  const [guessWords, setGuessWords] = useState([]);
  const [play, setPlay] = useState(false);

  if (!secret) {
    return (
      <div>
        <h1>Jotto</h1>
        <Alphabet play={play} />
        <Words
          setSecret={setSecret}
          secret={secret}
          play={play}
          setPlay={setPlay}
        />
      </div>
    );
  } else if (!play) {
    return (
      <div>
        <h1>Jotto</h1>
        <Alphabet />
        <WordsList
          play={play}
          secret={secret}
          setSecret={setSecret}
          guessWords={guessWords}
          setGuessWords={setGuessWords}
        />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Jotto</h1>
        {/* hide h4 during release */}
        {/* <h4 className="debug"> Debug Mode - Showing Secret: {secret}</h4> */}
        <Alphabet />

        <InputGuess
          play={play}
          guessWords={guessWords}
          setGuessWords={setGuessWords}
          secret={secret}
          setPlay={setPlay}
        />
        <WordsList
          play={play}
          secret={secret}
          setSecret={setSecret}
          guessWords={guessWords}
          setGuessWords={setGuessWords}
        />
      </div>
    );
  }
}
