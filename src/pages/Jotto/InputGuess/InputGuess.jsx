import { useState } from "react";
import "../Jotto.css"

import './InputGuess.css';
export default function InputGuess({
  secret,
  setPlay,
  guessWords,
  setGuessWords
}) {
  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];

  const [formData, setFormData] = useState();

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  function handleChange(evt) {
    if (evt.target.value.length < 5) {
      //Check to see if there are any non-letter chars
      let wordCheck = evt.target.value;
      wordCheck = wordCheck.toLowerCase();
      wordCheck = wordCheck.split('');
      let save = true;
      for (let i = 0; wordCheck.length > i; ++i){
        if (!letters.includes(wordCheck[i])){
          save = false;
        }
      }
      //Set the data if there are none.
      if (save){
        setFormData(evt.target.value);
      }
    } else {
      checkWord(evt);
    }
  }

  function checkWord(evt) {
    let newWord = evt.target.value;
    newWord = newWord.toUpperCase();
    // Make sure that the new Word is valid.
    let hasVowel = false;
    checkForVowel;

    if (hasVowel) {
      setGuessWords([...guessWords, newWord]);
      setFormData("");
      if (newWord === secret) {
        setPlay(false);
      }
    } else {
      setFormData("");
    }

    function checkForVowel(){
      let wordCheck = newWord;
      wordCheck.split('');
      for (let i = 0; wordCheck.length > i; ++i){
        if (vowels.includes(wordCheck[i])){
          hasVowel = true;
        }
      }
    }
  }

  return (
    <div className="inputWordDiv">
      <form className="inputWordForm" autoComplete="off" onSubmit={handleSubmit}>
        <input
          className="guessInput"
          placeholder="New 5 letter Word"
          value={formData}
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
}
