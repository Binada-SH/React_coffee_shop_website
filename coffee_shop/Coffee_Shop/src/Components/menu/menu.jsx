import React from 'react';
import './menu.css';

const menu = () => {
  return (
    <div className='menu'>
        <div className="menu_title">
            <h2>Our Menu</h2>
        </div>
        <div className="menu_hor_line">
          <hr className='line'/>
        </div>
        <div className="menu_para">
            <p>A little something for everyone
                 — handcrafted beverages and 
                 freshly baked delights.</p>
        </div>
        <div className="menu_list">
            <div className="coffee">
                <h3>
                    ☕ Coffee
                </h3>
            </div>
            <div className="coffee_tbl">
                    <ul className='th'>
                        <li>Drink</li>
                        <li>Description</li>
                        <li>Price</li>
                    </ul>
                </div>
                <div className="tl1">
                    <hr className="line1" />
                </div>
                <div className="td1">
                    <ul className="tr1">
                        <li>Espresso Shot</li>
                        <li>Pure, bold, and energizing</li>
                        <li>$2.50</li>
                    </ul>
                </div>
                <hr className="ml1" />
                <div className="td2">
                    <ul className="tr2">
                        <li>Americano</li>
                        <li>Espresso with hot water</li>
                        <li>$3.00</li>
                    </ul>
                </div>
                <hr className="ml2" />
                <div className="td3">
                    <ul className="tr3">
                        <li>Latte</li>
                        <li>Smooth milk with a shot of espresso</li>
                        <li>$3.50</li>
                    </ul>
                </div>
                <hr className="ml3" />               
                <div className="td4">
                    <ul className="tr4">
                        <li>Cappuccino</li>
                        <li>Frothy and balanced</li>
                        <li>$3.75</li>
                    </ul>
                </div>
                <hr className="ml4" />
                <div className="td5">
                    <ul className="tr5">
                        <li>Mocha</li>
                        <li>Chocolate meets coffee</li>
                        <li>$4.00</li>
                    </ul>
                </div>
                <hr className="ml5" />
                <div className="coffee_img">
                    <img src="src/assets/coffee_food.png" alt="" />
                </div>

                
        </div>

      
    </div>
  )
}

export default menu
