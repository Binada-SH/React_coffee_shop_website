import React from 'react'
import './App.css'; 
import Navbar from './Components/navbar/navbar';

const App = () => {
  return (
    <div className= 'container'>
      <div className="nav">
        <Navbar/>
      </div>
      <div className= 'hero_title'>
        <h1>Discover the <br/>Taste of Coffee <br/>at Brownie</h1>
      </div>
    </div>
    
  )
}

export default App
