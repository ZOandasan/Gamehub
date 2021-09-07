import Letter from "./Letter/Letter.jsx";

export default function Alphabet({ play }) {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  const btn = letters.map((l, idx) => (
    <Letter key={idx} Letter={l} play={play} />
  ));

  return (
    <>
      {btn}
      {/* <button onClick={() => resetColors()}>Reset Alphabet</button> */}
    </>
  );
}