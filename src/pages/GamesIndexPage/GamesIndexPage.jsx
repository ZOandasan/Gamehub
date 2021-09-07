import './GamesIndexPage.css'
import { Link } from "react-router-dom";

export default function GamesIndexPage(){
    return (
    <>
        <div>
            <h1>Games Index Page</h1>
        </div>
        <div>
            <span><Link to="/blackjack"><button className="gameLink">BlackJack</button></Link></span>
            <span><Link to="/connect-four"><button className="gameLink">Connect 4</button></Link></span>
            <span><Link to="/jotto"><button className="gameLink">Jotto</button></Link></span>
            <span><Link to="/tic-tac-toe"><button className="gameLink">Tic-Tac-Toe</button></Link></span>
            <span><Link to="/simon"><button className="gameLink">Simon</button></Link></span>
        </div>
    </>
    );
};