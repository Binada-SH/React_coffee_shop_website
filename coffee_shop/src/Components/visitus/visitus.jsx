import React from 'react';
import './visitus.css';

const visitus = () => {
  return (
    <div className='visitus_container'>
        <div className="visit_title">
            <h2>Visit Us</h2>
        </div>
        <hr className="vline" />
        <div className="visit_des">
            <p>Come Say Hello !</p>
        </div>
        <div className="address_title">
            <h3>Address</h3>
        </div>
        <div className="address_info">
            <p>Brownie Coffee Shop
                123 Brew Street, Colombo, Sri Lanka
            </p>
        </div>
        <div className="hours_title">
            <h3>Opening Hours</h3>
        </div>
        <div className="hours_info">
            <p>Mon–Fri: 7:00 AM – 09:00 PM <br />
                Sat–Sun: 8:00 AM – 10:00 PM
            </p>
        </div>
      
    </div>
  )
}

export default visitus
