import './Board.css'
import { useState } from 'react'
import { calculateWinner } from '../utils/calculateWinner';
import Square from './Squares';

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [nextX, setNextX] = useState(true)

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) {
        return 
    }
    squares[index] = nextX ? 'X' : 'O'
    setNextX(!nextX)
    setSquares([...squares])
    console.log(squares)
  }

  // Declaring winner
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (nextX ? "X" : "O");
  }
    
  return (
    <>
     <h3 className={winner && 'winner'}>{status}</h3>
     <div className="board">
      {squares.map((value, index) => {
        return (
          <Square handleClick={handleClick} value={value} key={index} index={index} winner={winner}/>
        )
      })}
    </div>
    </>
  )
}
