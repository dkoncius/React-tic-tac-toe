import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

function Box({value, position, onSquareClick}) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      onClick={onSquareClick}
      position={position}
      ref={mesh}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      <Text position={[0, -0.1, 0.6]} fontSize={1} color={'black'}>
        {value}
      </Text>
    </mesh>
  )
}



export default function Experience() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <Canvas>
        <orthographicCamera/>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box onSquareClick={() => handleClick(0)} value={squares[0]} position={[-1.5, 1.5, 0]}/>
        <Box onSquareClick={() => handleClick(1)} value={squares[1]} position={[0, 1.5, 0]}/>
        <Box onSquareClick={() => handleClick(2)} value={squares[2]} position={[1.5, 1.5, 0]}/>

        <Box onSquareClick={() => handleClick(3)} value={squares[3]} position={[-1.5, 0, 0]}/>
        <Box onSquareClick={() => handleClick(4)} value={squares[4]} position={[0, 0, 0]}/>
        <Box onSquareClick={() => handleClick(5)} value={squares[5]} position={[1.5, 0, 0]}/>

        <Box onSquareClick={() => handleClick(6)} value={squares[6]} position={[-1.5, -1.5, 0]}/>
        <Box onSquareClick={() => handleClick(7)} value={squares[7]} position={[0, -1.5, 0]}/>
        <Box onSquareClick={() => handleClick(8)} value={squares[8]} position={[1.5, -1.5, 0]}/>
    </Canvas>
    )
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}