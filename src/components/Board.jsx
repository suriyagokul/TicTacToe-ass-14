import React, { useState, useEffect } from 'react';
import Square from './Square';

export default function Board() {
  const [symbols, setSymbols] = useState(Array(9).fill(null));
  const [isSymbol, setIsSymbol] = useState(true);
  const [result, setResult] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (index) => {
    if (gameOver) {
      return; // Ignore clicks when the game is over
    }

    const updatedSymbols = [...symbols];
    updatedSymbols[index] = isSymbol ? 'O' : 'X';
    setSymbols(updatedSymbols);
    setIsSymbol(!isSymbol);
  };

  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      setResult(winner);
      setGameOver(true);
    } else if (!symbols.some(symbol => symbol === null)) {
      setResult("It's a draw!");
      setGameOver(true);
    } else {
      setResult("");
      setGameOver(false);
    }
  }, [symbols]);

  const restartGame = () => {
    setSymbols(Array(9).fill(null));
    setIsSymbol(true);
    setResult("");
    setGameOver(false);
  };

  const checkWinner = () => {
    const lines = [
      [0, 1, 2], // Horizontal lines
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // Vertical lines
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // Diagonal lines
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        symbols[a] &&
        symbols[a] === symbols[b] &&
        symbols[a] === symbols[c]
      ) {
        return symbols[a]; // Return the winning symbol
      }
    }

    return null; // No winner
  };

  return (
    <>
      <div className='mt-10 mb-10'>
        <h1 className='font-bold text-white text-2xl'>Tic Tac Toe</h1>
      </div>

      <div className='flex items-center justify-center mr-2'>
        <Square value={symbols[0]} handleClick={() => handleClick(0)} />
        <Square value={symbols[1]} handleClick={() => handleClick(1)} />
        <Square value={symbols[2]} handleClick={() => handleClick(2)} />
      </div>
      <div className='flex items-center justify-center mr-2'>
        <Square value={symbols[3]} handleClick={() => handleClick(3)} />
        <Square value={symbols[4]} handleClick={() => handleClick(4)} />
        <Square value={symbols[5]} handleClick={() => handleClick(5)} />
      </div>
      <div className='flex items-center justify-center mr-2'>
        <Square value={symbols[6]} handleClick={() => handleClick(6)} />
        <Square value={symbols[7]} handleClick={() => handleClick(7)} />
        <Square value={symbols[8]} handleClick={() => handleClick(8)} />
      </div>
      {result && (
        <div className="mt-3 text-xl text-white font-bold">Congrats {result}!! You won the game 🥇</div>
      )}
      {gameOver && (
        <button
          className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
          onClick={restartGame}
        >
          Restart
        </button>
      )}
    </>
  );
}
