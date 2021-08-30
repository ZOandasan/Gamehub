import "./BoardTile.css";

export default function BoardTile({ content, index, play, pressButton }){
    if (content < 0) {
        return <button className="player-one-tile">O</button>;
    } else if (content > 0) {
        return <button className="player-two-tile">X</button>;
    } else if (!play) {
        return <button className="disabled-tile">-</button>;
    } else {
        return <button className="enabled-tile"onClick={() => pressButton(index)}>-</button>;
    }
}