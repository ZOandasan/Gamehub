export default function Words({ setSecret, secret, play, setPlay }) {
    const wordsArray = [
      "Anvil",
      "Ancor",
      "Above",
      "Bacon",
      "Bulky",
      "Batch",
      "Carve",
      "Clamp",
      "Cater",
      "Celts",
      "Devil",
      "Draft",
      "Decoy",
      "Fjord",
      "Fiber",
      "Flour",
      "Gamer",
      "Gnome",
      "Graft",
      "Hertz",
      "Hydra",
      "Hands",
      "Hoard",
      "Imply",
      "Inert",
      "Irony",
      "Jumbo",
      "Joint",
      "Jihad",
      "Knead",
      "Knife",
      "Lemur",
      "Lithe",
      "Mango",
      "Micro",
      "Nerdy",
      "Nixed",
      "Onery",
      "Owned",
      "Perky",
      "Pasty",
      "Quote",
      "Razor",
      "Realm",
      "Risky",
      "Shark",
      "Teary",
      "Thief",
      "Ulcer",
      "Unify",
      "Vague",
      "Vegan",
      "Votes",
      "Waste",
      "Women",
      "Weigh",
      "Xenia",
      "Xenic",
      "Young",
      "Yeast",
      "Yacht",
      "Zesty",
      "Zebra",
      "Zilch",
      "Zoned"
      //"Apple", //Double L
      //"Bible", // Double B
      //"Deeds", //Double E
      //"Eagle", //Double E
      //"Eject", //Double E
      //"Ember", //Double E
      //"Exile", //Double E
      //"Fauna", //Double A
      //"Gangs", //Double G
      //"Ionic", //Double I
      //"Jaded", //Double D
      //"Karma", //Double A
      //"Kazoo", //Double O
      //"Lapel", //Double L
      //"Larva", //Double A
      //"Messy", //Double S
      //"Moors", //Double O
      //"Naval", //Double A
      //"Nonce", //Double N
      //"Oasis", //double S
      //"Onion", //Double O & N
      //"Paper", //Double P
      //"Pixie", //Double I
      //"Quill", //Double L
      //"Queen", //Double E
      //"Queue", //Double U & E
      //"Roots", //Double O
      //"Salad", //Double A
      //"Scuff", //Double F
      //"Sassy", //Triple S
      //"Titan", //Double T
      //"Trees", //Double E
      //"Udder", //Double D
      //"Usurp", //Double U
      //"Vigil", //Double I
      //"Whiff", //Double F
      //"Xerox", //Double X
      //"Xylyl", //Double Y & L
      //"Yummy", //Double Y & M
    ];
  
    function selectSecret() {
      let index = Math.floor(Math.random() * wordsArray.length);
      let newSecret = wordsArray[index];
      newSecret = newSecret.toUpperCase();
      setSecret(newSecret);
      setPlay(true);
    }
  
    if (!play) {
      return (
        <div>
          <button className="newGame" onClick={() => selectSecret()}>
            New Game
          </button>
        </div>
      );
    } else {
      return <div>{secret}</div>;
    }
  }