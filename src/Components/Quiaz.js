import React from 'react'
import{Link} from 'react-router-dom'
import Test from './Test'
import Confetti from 'react-confetti'

function Quiaz() {
  return (
    <div>
          <Test />
          <Confetti />
     
        <Link to="/">Back To Home</Link>
        
    </div>
  )
}

export default Quiaz