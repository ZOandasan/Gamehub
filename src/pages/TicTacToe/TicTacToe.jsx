import { useState } from "react";
import Board from "./Board/Board";
import ResetGame from "./ResetGame/ResetGame";
import TurnTitle from "./TurnTitle/TurnTitle";

export default function TicTacToe(){
    const [play, setPlay] = useState(true);
    const [tie, setTie] = useState(false);
    const [turn, setTurn] = useState(1);
    const [playerTurn, setPlayerTurn] = useState(5);
    const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

    function resetGame() {
        setPlay(true);
        setTie(false);
        setTurn(1);
        setPlayerTurn(1);
        setBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }

    return (
        <div>
            <h1>Tic-Tac-Toe</h1>
            <Board />
            <TurnTitle playerTurn={playerTurn} play={play} tie={tie}/>
            <ResetGame resetGame={resetGame} play={play}/>
        </div>
    )
}