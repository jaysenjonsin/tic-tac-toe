import React, { useState } from 'react';
import Square from './Square';
type Props = {};

const Board = (props: Props) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  //docs version: const [xIsNext, setXIsNext] = useState(true);
  const handleClick = (i: number) => {
    // slicing so we can keep track of moves
    const nextSquares = squares.slice();
    nextSquares[i] = currentPlayer === 'X' ? 'X' : 'O';
    setSquares(nextSquares);
    const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
    setCurrentPlayer(nextPlayer);
  };
  return (
    <>
      <div className='board'>
        <div className='board-row'>
          <Square value={squares[0]} handleClick={() => handleClick(0)} />
          <Square value={squares[1]} handleClick={() => handleClick(1)} />
          <Square value={squares[2]} handleClick={() => handleClick(2)} />
        </div>
        <div className='board-row'>
          <Square value={squares[3]} handleClick={() => handleClick(3)} />
          <Square value={squares[4]} handleClick={() => handleClick(4)} />
          <Square value={squares[5]} handleClick={() => handleClick(5)} />
        </div>
        <div className='board-row'>
          <Square value={squares[6]} handleClick={() => handleClick(6)} />
          <Square value={squares[7]} handleClick={() => handleClick(7)} />
          <Square value={squares[8]} handleClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
};

// const Board = (props: Props) => {
//   return (
//     <>
//       <div className='container'>
//         <div className='row'>
//           <Square />
//           <Square />
//           <Square />
//         </div>
//         <div className='row'>
//           <Square />
//           <Square />
//           <Square />
//         </div>
//         <div className='row'>
//           <Square />
//           <Square />
//           <Square />
//         </div>
//       </div>
//     </>
//   );
// };

export default Board;
