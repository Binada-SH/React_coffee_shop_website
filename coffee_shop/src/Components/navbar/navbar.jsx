import React from 'react';
import './navbar.css';

const navbar = () => {
  return (
    <div className= 'navbar'>
      <div className="logo">
              <h2>Brownie</h2>
      </div>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#visitus">Contact</a></li>
        </ul>
      
    </div>
  )
}

export default navbar
