import Letter from "./Letter/Letter.jsx";
import { useState } from 'react';

export default function Alphabet({ play, letters, setLetters, resetColors}) {  

  const btn = letters.map((l, idx) => (
    <Letter key={idx} letters={letters} Letter={l} play={play} index={idx} setLetters={setLetters}/>
  ));

  return (
    <>
      {btn}
      <button onClick={() => resetColors()}>Reset Alphabet</button>
    </>
  );
}