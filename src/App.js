import React from 'react'
import Square from './components/Square'
import Board from './components/Board'

export default function App() {
  return (
    <div className='flex flex-col items-center bg-zinc-500 h-[100vh] font-[Poppins]'>
        <Board/>
    </div>
  )
}
