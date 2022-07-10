import React, {useState, useEffect} from 'react'
import './Game.css'

/**
 * States: GameOver, Playing
 * Uses Hero/Player Component, Enemies Component
 * 
 * 
 * Hero should be at the bottom of the page
 * Enemies should be at the top
 */




function Game(props) {  
  const [squares, setSquares] = useState(new Array(1800).fill(<div className='square'>Hello</div>))
  const [gameOver, setGameOver] = useState(false)
  const [inGame, setInGame] = useState(true)


  
  useEffect( () => {
    console.log(squares)
  }, [])  
  // let temp = <div className='temp'>hi</div>  
  // const displaySquares = () => {
  //   let squares = []
  //   for (let i = 0; i < 450; i++) {
  //     squares.push(<div className='square'></div>)
  //   }
  // }
  
  return (
    <div className='game'> 
      <div className="game-container">
        <div className="grid">
          {squares}
        </div>          
      </div>       
    </div>
  )
}

export default Game