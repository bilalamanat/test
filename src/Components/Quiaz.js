import React from 'react';
import { Link } from 'react-router-dom';
import Test from './Test';
import Confetti from 'react-confetti';


function Quiaz() {
  return (
    <div>
      <Test />
      <Confetti />
     
     

      {/* Add the button with the class for styling */}
      <Link to="/"> <button className="quiz-button"> Back To Home</button></Link>
    </div>
  );
}

export default Quiaz;
