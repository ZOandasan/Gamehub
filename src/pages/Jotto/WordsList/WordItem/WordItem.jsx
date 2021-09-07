export default function WordItem({ index, word, secret }) {
    let value = 0;
    if (secret) {
      let copySecret = secret;
      copySecret = copySecret.split("");
      let copyWord = word;
      copyWord = copyWord.split("");
      let uniqueChars = [...new Set(copyWord)];
      copyWord = uniqueChars;
      for (let idx = 0; idx < copyWord.length; ++idx) {
        if (copySecret.includes(copyWord[idx])) {
          ++value;
        }
      }
    }
  
    if (secret) {
      return (
        <div>
          <span>
            {index + 1}: {word} has {value}
          </span>
        </div>
      );
    } else {
      return (
        <div>
          <span>
            {index + 1}: {word}
          </span>
        </div>
      );
    }
  }
  