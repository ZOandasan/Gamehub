export default function Words({ setSecret, secret, play, setPlay }) {
    const wordsArray = [
      "Anvil",
      "Ancor",
      "Above",
      //"Apple", //Double L
      "Bacon",
      "Bulky",
      "Batch",
      //"Bible", // Double B
      "Carve",
      "Clamp",
      "Cater",
      "Celts",
      "Devil",
      "Draft",
      "Decoy",
      //"Deeds", //Double E
      //"Eagle", //Double E
      //"Eject", //Double E
      //"Ember", //Double E
      //"Exile", //Double E
      //"Fauna", //Double A
      "Fjord",
      "Fiber",
      "Flour",
      "Gamer",
      "Gnome",
      //"Gangs", //Double G
      "Graft",
      "Hertz",
      "Hydra",
      "Hands",
      "Hoard",
      //"Ionic", //Double I
      "Imply",
      "Inert",
      "Irony",
      //"Jaded", //Double D
      "Jumbo",
      "Joint",
      "Jihad",
      //"Karma", //Double A
      //"Kazoo", //Double O
      "Knead",
      "Knife",
      //"Lapel", //Double L
      //"Larva", //Double A
      "Lemur",
      "Lithe",
      "Mango",
      //"Messy", //Double S
      "Micro",
      //"Moors", //Double O
      "Nerdy",
      "Nixed",
      //"Naval", //Double A
      //"Nonce", //Double N
      //"Oasis", //double S
      //"Onion", //Double O & N
      "Onery",
      "Owned",
      //"Paper", //Double P
      "Perky",
      "Pasty",
      //"Pixie", //Double I
      //"Quill", //Double L
      "Quote",
      //"Queen", //Double E
      //"Queue", //Double U & E
      "Razor",
      //"Roots", //Double O
      "Realm",
      "Risky",
      //"Salad", //Double A
      //"Scuff", //Double F
      //"Sassy", //Triple S
      "Shark",
      "Teary",
      "Thief",
      //"Titan", //Double T
      //"Trees", //Double E
      "Ulcer",
      //"Udder", //Double D
      "Unify",
      //"Usurp", //Double U
      "Vague",
      "Vegan",
      //"Vigil", //Double I
      "Votes",
      "Waste",
      "Women",
      "Weigh",
      //"Whiff", //Double F
      //"Xerox", //Double X
      //"Xylyl", //Double Y & L
      "Xenia",
      "Xenic",
      "Young",
      "Yeast",
      "Yacht",
      //"Yummy", //Double Y & M
      "Zesty",
      "Zebra",
      "Zilch",
      "Zoned"
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