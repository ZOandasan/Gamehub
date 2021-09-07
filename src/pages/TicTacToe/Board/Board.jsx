import BoardTile from "./BoardTile/BoardTile";

export default function Board({
    board,
    playerTurn,
    turn,
    play,
    tie,
    setTie,
    setBoard,
    setTurn,
    setPlayerTurn,
    setPlay
}){
    function checkWinCons() {
        if (turn > 8) {
            setTie(true);
            setPlay(false);
        }
        if (
            Math.abs(board[0] + board[1] + board[2]) === 3 ||
            Math.abs(board[3] + board[4] + board[5]) === 3 ||
            Math.abs(board[6] + board[7] + board[8]) === 3 ||
            Math.abs(board[0] + board[3] + board[6]) === 3 ||
            Math.abs(board[1] + board[4] + board[7]) === 3 ||
            Math.abs(board[2] + board[5] + board[8]) === 3 ||
            Math.abs(board[0] + board[4] + board[8]) === 3 ||
            Math.abs(board[2] + board[4] + board[6]) === 3
        ) {
            setTie(false);
            setPlay(false);
        }
    }

    function pressButton(index) {
        board.splice(index, 1, playerTurn);
        checkWinCons();
        if (play) {
            setTurn((turn += 1));
            setPlayerTurn((playerTurn *= -1));
        }
    }

    const initBoard = [];
    for (let idx = 0; board.length > idx; idx += 1) {
        initBoard.push(
            <BoardTile
                play={play}
                key={idx}
                index={idx}
                content={board[idx]}
                pressButton={pressButton}
            />
        );
        if (!((idx + 1) % 3)) {
            initBoard.push(<br />);
        }
    }

    return (
        <div className="board">
          <>
            {initBoard.map((b, idx) => (
              <>{b}</>
            ))}
          </>
        </div>
    );
}