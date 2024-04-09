import Dice from "./Dice";
import "./Board.css";

function Board({ className, name, color, gameHistory }) {
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((a, b) => a + b, 0);
  const classNames = `Board ${className}`;
  return (
    <div className={classNames}>
      <h1 className="Board-heading">{name}</h1>
      <Dice color={color} num={num} />
      <h2 className="Board-heading">총점</h2>
      <p>{sum}</p>
      <h2 className="Board-heading">기록</h2>
      <p>{gameHistory.join(", ")}</p>
    </div>
  );
}

export default Board;
