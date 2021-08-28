import "./BoardTile.css";

export default function BoardTile({ content, index, play, pressButton }){
    if (content < 0) {
        return <button className="player-one">O</button>;
    } else if (content > 0) {
        return <button className="player-two">X</button>;
    } else if (!play) {
        return <button className="disabled">-</button>;
    } else {
        return <button onClick={() => pressButton(index)}>-</button>;
    }
}