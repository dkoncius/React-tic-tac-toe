import { calculateWinner } from "../utils/calculateWinner";
import Square from "./Squares";
import "./Board.css";
import { useMemo } from "react";

export default function Board({ xIsNext, squares, onPlay }) {
  const winner = useMemo(() => calculateWinner(squares), [squares]);

  function handleClick(i) {
    if (winner || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  let status;
  if (winner) {
    status = `Winner: ${winner.player}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <h3 className="status">{status}</h3>
      <div className="board">
      {squares.map((square, index) => {
        const isWinningSquare = winner && winner.line.includes(index);
        const squareValue = winner && !isWinningSquare ? null : square;
        const squareClass = isWinningSquare ? "square-winning" : "square";

        // Render the square normally if it is a winning square or there is no winner yet
        // Otherwise, render an empty square
        return (
          <Square
            key={index}
            value={squareValue}
            className={squareClass}
            onSquareClick={() => handleClick(index)}
          />
        );
      })}
      </div>
    </>
  );
}
