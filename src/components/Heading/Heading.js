import React from 'react'
import "./Heading.css"

const Heading = () => {
  return (
    <div className='headingContainer'>
        <h1>TicTacToe</h1>
        <h3> Just click on the boxes to start playing!</h3>
        <div>
            <p>Player 1: X</p>
            <p>Player 2: O</p>
        </div>
    </div>
  )
}

export default Heading
