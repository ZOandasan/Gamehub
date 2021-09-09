import "./GamesIndexPage.css";
import { Link } from "react-router-dom";
import BlackJackimg from './indexIMGs/BlackJackimg.png'
import ConnectFourimg from './indexIMGs/ConnectFourimg.png'
import Jottoimg from './indexIMGs/Jottoimg.png'
import TicTacToeimg from './indexIMGs/TicTacToeimg.png'

export default function GamesIndexPage() {
  return (
    <>
      <div className="gamesIndexHeader">
        <h1>Games Index Page</h1>
      </div>
      <div className="gamesIndexCardDiv">
        <div className="gameIndexCard">
        <img src={BlackJackimg}
        className="gameIndexImg" />
          <Link to="/blackjack">
            <button className="gameLink">Play BlackJack</button>
          </Link>
        </div>
        <div className="gameIndexCard">
        <img src={ConnectFourimg}
        className="gameIndexImg" />
          <Link to="/connect-four">
            <button className="gameLink">Play Connect Four</button>
          </Link>
        </div>
        {/* <span><Link to="/hangman"><button className="gameLink">Hangman</button></Link></span> */}
        <div className="gameIndexCard">
        <img src={Jottoimg}
        className="gameIndexImg" />
          <Link to="/jotto">
            <button className="gameLink">Play Jotto</button>
          </Link>
        </div>
        {/* <span><Link to="/simon"><button className="gameLink">Simon</button></Link></span> */}
        <div className="gameIndexCard">
        <img src={TicTacToeimg}
        className="gameIndexImg" />
          <Link to="/tic-tac-toe">
            <button className="gameLink">Play Tic-Tac-Toe</button>
          </Link>
        </div>
        {/* <span><Link to="/war"><button className="gameLink">War</button></Link></span> */}
      </div>
    </>
  );
}
