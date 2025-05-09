import React from 'react';
import './footer.css';

const footer = () => {
  return (
    <div className='footer_container'>
        <div className="footer_logo">
            <h2>Brownie</h2>
        </div>
        <div className="footer_slogan">
            <p>Where Coffee Meets Comfort</p>
        </div>
        <div className="contact">
            <div className="contact_t">
                <h3>Contact Us :</h3>
            </div>
            <ul className="contact_info">
                <li>076-345 4546</li>
                <li>sales@brownie.lk</li>
                <li>Brownie Coffee Shop
                    123 Brew Street, Colombo, Sri Lanka</li>
            </ul>
        </div>
        <div className="copyrights">
            <p>
                © 2025 Binada Hettiarachchi. All rights reserved.
            </p>
        </div>
      
    </div>
  )
}

export default footer
