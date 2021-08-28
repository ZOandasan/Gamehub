

export default function TurnTitle({ playerTurn, play, tie }){
    if (tie) {
        return <h2>Tie Game!</h2>;
    }
    if (!play) {
        if (playerTurn < 0) {
            return <h2>Winner! Player 1</h2>;
        } else {
            return <h2>Winner! Player 2</h2>;
        }
    }
    if (playerTurn > 0) {
        return <h2>Player 1's Turn</h2>;
    } else {
        return <h2>Player 2's Turn</h2>;
    }
}
