import React, { useState } from "react";
import './Letter.css';

export default function Letter({ Letter, play , index, letters, setLetters}) {
  let upper = Letter.letter.toUpperCase();
  let bgColorList = ["lightgray", "lightgreen", "salmon"];

  function changeColor(){

    let newColor = (Letter.color + 1) % 3
    let newLetters = [...letters];
    newLetters.splice(index, 1, {letter: Letter.letter, color: newColor})
    setLetters(newLetters);
  }

  return (
    <button
      className="letterBtns"
      onClick={changeColor}
      variant="contained"
      style={{ backgroundColor: bgColorList[Letter.color] }}
    >
      {upper}
    </button>
  );
}
