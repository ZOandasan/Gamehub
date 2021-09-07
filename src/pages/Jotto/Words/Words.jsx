export default function Words({ setSecret, secret, play, setPlay }) {
    const wordsArray = [
      "Anvil",
      "Ancor",
      "Above",
      "Actor",
      "Adopt",
      "Agent",
      "Alike",
      "Alert",
      "Angry",
      "Bacon",
      "Badly",
      "Batch",
      "Block",
      "Brain",
      "Breif",
      "Broad",
      "Board",
      "Bound",
      "Bulky",
      "Buyer",
      "Cable",
      "Carve",
      "Cater",
      "Cause",
      "Celts",
      "Chain",
      "Claim",
      "Clamp",
      "Coast",
      "Could",
      "Crime",
      "Curve",
      "Dance",
      "Daily",
      "Debut",
      "Decoy",
      "Devil",
      "Draft",
      "Drink",
      "Dying",
      "Early",
      "Earth",
      "Eight",
      "Empty",
      "Entry",
      "Equal",
      "Exact",
      "Faith",
      "False",
      "Fiber",
      "Field",
      "First",
      "Fixed",
      "Fjord",
      "Flash",
      "Flour",
      "Fluid",
      "Focus",
      "Forum",
      "Fraud",
      "Front",
      "Fruit",
      "Gamer",
      "Giant",
      "Given",
      "Globe",
      "Gnome",
      "Grace",
      "Graft",
      "Grand",
      "Great",
      "Group",
      "Guide",
      "Hands",
      "Heart",
      "Hertz",
      "Hoard",
      "Hotel",
      "Human",
      "Hydra",
      "Ideal",
      "Imply",
      "Index",
      "Inert",
      "Input",
      "Irony",
      "Jihad",
      "Joint",
      "Jumbo",
      "Knead",
      "Knife",
      "Laugh",
      "Layer",
      "Lease",
      "Lemur",
      "Lithe",
      "Logic",
      "Lunch",
      "Lying",
      "Major",
      "Mango",
      "Media",
      "Metal",
      "Micro",
      "Mount",
      "Mouse",
      "Music",
      "Nerdy",
      "Newly",
      "Nixed",
      "Noise",
      "Novel",
      "Nurse",
      "Ocean",
      "Often",
      "Onery",
      "Other",
      "Ought",
      "Owned",
      "Panel",
      "Pasty",
      "Perky",
      "Phase",
      "Phone",
      "Pitch",
      "Plain",
      "Pound",
      "Quick",
      "Quiet",
      "Quite",
      "Quote",
      "Radio",
      "Raise",
      "Range",
      "Rapid",
      "Razor",
      "Reach",
      "Ready",
      "Realm",
      "Rival",
      "Risky",
      "Roman",
      "Route",
      "Royal",
      "Scale",
      "Scope",
      "Shape",
      "Shark",
      "Sixth",
      "Sixty",
      "Sized",
      "Smile",
      "Space",
      "Spent",
      "Split",
      "Steal",
      "Steal",
      "Strip",
      "Study",
      "Style",
      "Sugar",
      "Teary",
      "Thief",
      "Throw",
      "Tires",
      "Topic",
      "Toxic",
      "Trial",
      "Twice",
      "Under",
      "Undue",
      "Ulcer",
      "Unify",
      "Until",
      "Urban",
      "Usage",
      "Valid",
      "Vague",
      "Vegan",
      "Video",
      "Virus",
      "Vital",
      "Voice",
      "Votes",
      "Waste",
      "Water",
      "Weigh",
      "While",
      "Whose",
      "Women",
      "Worse",
      "Wound",
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