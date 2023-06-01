import React from 'react'


export default function Square(props) {
  return (
    <div className=''>
        <button className='h-20 w-20 bg-white text-green font-bold mt-2 mr-1' onClick={props.handleClick}  style={{ verticalAlign: 'middle' }}>{props.value}</button>
    </div>
  )
}
