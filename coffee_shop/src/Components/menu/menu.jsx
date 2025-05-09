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
        <div className="special_drink">
            <h3>🧋 Special Drinks</h3>
        </div>
        <div className="sptbl">
            <ul className="spth">
                <li>Drink</li>
                <li>Description</li>
                <li>Price</li>
            </ul>
        </div>
        <div className="sptl1">
            <hr className="spline1" />
        </div>
        <div className="sptd1">
            <ul className="sptr1">
                <li>Brownie Blend</li>
                <li>Our signature chocolate-infused latte</li>
                <li>$4.50</li>
            </ul>
        </div>
            <hr className="spml1" />
        <div className="sptd2">
            <ul className="sptr2">
                <li>Vanilla Cold Brew</li>
                <li>Sweet, chilled, and energizing</li>
                <li>$4.25</li>
            </ul>
        </div>
            <hr className="spml2" />
        <div className="sptd3">
            <ul className="sptr3">
                <li>Cinnamon Chai</li>
                <li>Warm spices in a creamy base</li>
                <li>$4.00</li>
            </ul>
        </div>
            <hr className="spml3" />               
        <div className="special_img">
            <img src="src/assets/special_drink.png" alt="" />
        </div>
        <div className="bakery">
            <h3>🍰 Bakery</h3>
        </div>
        <div className="btbl">
            <ul className="bth">
                <li>Drink</li>
                <li>Description</li>
                <li>Price</li>
            </ul>
        </div>
        <div className="btl1">
            <hr className="bline1" />
        </div>
        <div className="btd1">
            <ul className="btr1">
                <li>Classic Brownie</li>
                <li>Fudgy, rich, and house-made</li>
                <li>$2.50</li>
            </ul>
        </div>
            <hr className="bml1" />
        <div className="btd2">
            <ul className="btr2">
                <li>Cheesecake Slice</li>
                <li>Creamy with a crunchy base</li>
                <li>$4.25</li>
            </ul>
        </div>
            <hr className="bml2" />
        <div className="btd3">
            <ul className="btr3">
                <li>Croissant</li>
                <li>Buttery and flaky</li>
                <li>$2.25</li>
            </ul>
        </div>
            <hr className="bml4" />
            <div className="btd4">
            <ul className="btr4">
                <li>Banana Bread</li>
                <li>Fresh and moist, made daily</li>
                <li>$3.00</li>
            </ul>
        </div>
            <hr className="bml4" />               
        <div className="bakery_img">
            <img src="src/assets/bakery.png" alt="" />
        </div>


      
    </div>
  )
}

export default menu
