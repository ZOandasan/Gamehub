
import { useState } from "react";
import Words from "./Words/Words";
import Alphabet from "./Alphabet/Alphabet";
import WordsList from "./WordsList/WordsList";
import InputGuess from "./InputGuess/InputGuess";

export default function Jotto() {
  const [secret, setSecret] = useState();
  const [guessWords, setGuessWords] = useState([]);
  const [play, setPlay] = useState(false);
  const [letters, setLetters] = useState([
    {letter: "a", color: 0},
    {letter: "b", color: 0},
    {letter: "c", color: 0},
    {letter: "d", color: 0},
    {letter: "e", color: 0},
    {letter: "f", color: 0},
    {letter: "g", color: 0},
    {letter: "h", color: 0},
    {letter: "i", color: 0},
    {letter: "j", color: 0},
    {letter: "k", color: 0},
    {letter: "l", color: 0},
    {letter: "m", color: 0},
    {letter: "n", color: 0},
    {letter: "o", color: 0},
    {letter: "p", color: 0},
    {letter: "q", color: 0},
    {letter: "r", color: 0},
    {letter: "s", color: 0},
    {letter: "t", color: 0},
    {letter: "u", color: 0},
    {letter: "v", color: 0},
    {letter: "w", color: 0},
    {letter: "x", color: 0},
    {letter: "y", color: 0},
    {letter: "z", color: 0}
  ]);

  function resetColors() {
    setLetters([
      {letter: "a", color: 0},
      {letter: "b", color: 0},
      {letter: "c", color: 0},
      {letter: "d", color: 0},
      {letter: "e", color: 0},
      {letter: "f", color: 0},
      {letter: "g", color: 0},
      {letter: "h", color: 0},
      {letter: "i", color: 0},
      {letter: "j", color: 0},
      {letter: "k", color: 0},
      {letter: "l", color: 0},
      {letter: "m", color: 0},
      {letter: "n", color: 0},
      {letter: "o", color: 0},
      {letter: "p", color: 0},
      {letter: "q", color: 0},
      {letter: "r", color: 0},
      {letter: "s", color: 0},
      {letter: "t", color: 0},
      {letter: "u", color: 0},
      {letter: "v", color: 0},
      {letter: "w", color: 0},
      {letter: "x", color: 0},
      {letter: "y", color: 0},
      {letter: "z", color: 0}
    ]);
  }

  if (!secret) {
    return (
      <div>
        <h1>Jotto</h1>
        <Alphabet play={play} letters={letters} setLetters={setLetters} resetColors={resetColors}/>
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
        <Alphabet play={play} letters={letters} setLetters={setLetters} resetColors={resetColors}/>
        <WordsList
          play={play}
          secret={secret}
          setSecret={setSecret}
          guessWords={guessWords}
          setGuessWords={setGuessWords}
          resetColors={resetColors}
        />
      </div>
    );
  } else {
    return (
      <div className="jotto-game">
        <h1>Jotto</h1>
        {/* hide h4 during release */}
        {/* <h4 className="debug"> Debug Mode - Showing Secret: {secret}</h4> */}
        <Alphabet play={play} letters={letters} setLetters={setLetters} resetColors={resetColors}/>

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
          resetColors={resetColors}
        />
      </div>
    );
  }
}
