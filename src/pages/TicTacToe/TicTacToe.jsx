import { useState } from "react";
import Board from "./Board/Board";
import ResetGame from "./ResetGame/ResetGame";
import TurnTitle from "./TurnTitle/TurnTitle";

export default function TicTacToe(){
    const [play, setPlay] = useState(true);
    const [tie, setTie] = useState(false);
    const [turn, setTurn] = useState(1);
    const [playerTurn, setPlayerTurn] = useState(1);
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
            <Board 
                board={board}
                playerTurn={playerTurn}
                turn={turn}
                play={play}
                tie={tie}
                setTie={setTie}
                setPlay={setPlay}
                setBoard={setBoard}
                setTurn={setTurn}
                setPlayerTurn={setPlayerTurn}
            />
            <TurnTitle playerTurn={playerTurn} play={play} tie={tie}/>
            <ResetGame resetGame={resetGame} play={play}/>
        </div>
    )
}