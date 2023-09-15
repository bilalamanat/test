import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <h1>My Test Today Please See My Task</h1>
      <Link to="/Quiaz" className="check-button">
        Check Me!
      </Link>
    </div>
  );
}

export default Home;
