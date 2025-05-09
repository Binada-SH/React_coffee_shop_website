import React from 'react';
import './about.css';
import Coffee_about from '../../assets/coffee_about.png';

const about = () => {
  return (
    <div className= 'about_container'>
        <div className="about_title">
            <h2>About Us</h2>
        </div>
        <div className="about_hor_line">
          <hr className='line'/>
        </div>
        <div className="about_section">
            <p>Brownie began with a simple 
                idea: to create a place where 
                great coffee and good vibes 
                come together. We’re passionate
                 about crafting the perfect cup, 
                 serving up fresh pastries, and 
                 building a welcoming space for
                  everyone. Whether you're here 
                  for your morning boost, a study 
                  session, or a late-night catch-up, 
                  we're here to make your time 
                  worthwhile.</p>
        </div>
        <div className="mission">
          <h3 className='mission_title'>
            Our Mission
          </h3>
          <div className='mission_des'>
            <p>To serve exceptional 
              coffee and heartfelt hospitality that brings 
              people together.
            </p>
          </div>
          <div className="value">
            <h3 className="value_title">
              Why Choose Us
            </h3>
            <div className="reasons">
              <ul>
                <li>Quality in every cup</li>
                <li>Sustainability & community</li>
                <li>Warm, personal service</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="about_img">
          <img src={Coffee_about} alt="" />
        </div>

      
    </div>
  )
}

export default about
