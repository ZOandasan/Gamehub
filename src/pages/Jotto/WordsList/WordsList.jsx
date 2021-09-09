import WordItem from "./WordItem/WordItem";

export default function WordsList({
  play,
  secret,
  setSecret,
  guessWords,
  setGuessWords,
  resetColors
}) {
  function resetGame() {
    resetColors();
    setSecret();
    setGuessWords([]);
  }

  if (!play) {
    const Item = guessWords.map((w, idx) => (
      <WordItem key={idx} index={idx} word={w} />
    ));
    return (
      <div>
        <>{Item}</>
        <h3>You Won in {guessWords.length} guesses!</h3>
        <button onClick={() => resetGame()}>Play Again?</button>
      </div>
    );
  } else if (guessWords.length) {
    const Item = guessWords.map((w, idx) => (
      <WordItem key={idx} index={idx} word={w} secret={secret} />
    ));
    return <>{Item}</>;
  } else {
    return <span>No Guesses</span>;
  }
}
