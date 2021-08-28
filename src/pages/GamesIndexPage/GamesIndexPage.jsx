import './GamesIndexPage.css'
import { Link } from "react-router-dom";

export default function GamesIndexPage(){
    return (
    <>
        <div>
            <h1>Games Index Page</h1>
        </div>
        <div>
            <span><Link to="/blackjack"><button>BlackJack</button></Link></span>
            <span><Link to="/connect-four"><button>Connect 4</button></Link></span>
            <span><Link to="/tic-tac-toe"><button>Tic-Tac-Toe</button></Link></span>
            <span><Link to="/simon"><button>Simon</button></Link></span>
            <span><Link to="/war"><button>War</button></Link></span>
        </div>
    </>
    );
};