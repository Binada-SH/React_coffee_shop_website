import React from 'react'
import './App.css'; 
import Navbar from './Components/navbar/navbar';
import Cta_btn from './Components/cta_btn/cta_btn';

const App = () => {
  return (
    <div className= 'container'>
      <div className="nav">
        <Navbar/>
      </div>
      <div className= 'hero_title'>
        <h1>Discover the <br/>Taste of Coffee <br/>at Brownie</h1>
      </div>
      <div className="cta">
        <Cta_btn/>
      </div>
    </div>
    
  )
}

export default App
