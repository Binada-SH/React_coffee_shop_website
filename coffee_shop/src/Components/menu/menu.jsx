import React from 'react';
import './menu.css';
import Coffee_food from '../../assets/coffee_food.png';
import Special_food from '../../assets/special_drink.png';
import Bakery from '../../assets/bakery.png';

const coffeeMenu = [
    {drink:'Espresso Shot', 
    description:'Pure, bold, and energizing', 
    price:'$2.50'},

    {drink:'Americano', 
    description:'Espresso with hot water', 
    price:'$3.00'},

    {drink:'Latte', 
    description:'Smooth milk with a shot of espresso', 
    price:'$3.50'},

    {drink:'Cappuccino',
    description:'Frothy and balanced', 
    price:'$3.75'},

    {drink:'Mocha', 
    description:'Chocolate meets coffee', 
    price:'$4.00'},
];

const specialDrinkMenu = [
    {drink:'Brownie Blend', 
    description:'Our signature-infused latte', 
    price:'$2.50'},

    {drink:'Vanilla Cold Brew', 
    description:'Sweet,chilled, and energizing', 
    price:'$3.00'},

    {drink:'Cinnamon Chai', 
    description:'Warm Spices in a creamy base', 
    price:'$3.50'},

    {drink:'Cappuccino',
    description:'Frothy and balanced', 
    price:'$3.75'},

    {drink:'Mocha', 
    description:'Chocolate meets coffee', 
    price:'$4.00'},
];

const bakeryMenu = [
    {drink:'Classic Brownie', 
    description:'Fudggy, rich, and house-made', 
    price:'$2.50'},

    {drink:'Cheesecake Slice', 
    description:'Creamy with a crunchy base', 
    price:'$3.00'},

    {drink:'Croissant', 
    description:'Buttery and flaky', 
    price:'$3.50'},

    {drink:'Banana Bread',
    description:'Fresh, and moist, made daily', 
    price:'$3.75'},
];

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
            <div className="coffee_menu">
                <table className="coffee_table">
                    <thead>
                        <tr>
                            <th>Drink</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>   
                    </thead>
                    <tbody>
                        {coffeeMenu.map((item,index) => (
                            <tr key={index}>
                                <td>{item.drink}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
                <div className="coffee_img">
                    <img src={Coffee_food} alt="" />
                </div>
            <div className="special_drink">
                <h3>🧋 Special Drinks</h3>
            </div>
            <div className="special_drinks_menu">
                <table className="special_drink_table">
                    <thead>
                        <tr>
                            <th>Drink</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>   
                    </thead>
                    <tbody>
                        {specialDrinkMenu.map((item,index) => (
                            <tr key={index}>
                                <td>{item.drink}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="special_img">
            <img src={Special_food} alt="" />
        </div>
        <div className="bakery">
            <h3>🍰 Bakery</h3>
        </div>
        <div className="bakery_menu">
                <table className="bakery_table">
                    <thead>
                        <tr>
                            <th>Drink</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>   
                    </thead>
                    <tbody>
                        {specialDrinkMenu.map((item,index) => (
                            <tr key={index}>
                                <td>{item.drink}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bakery_img">
            <img src={Bakery} alt="" />
        </div>
    </div>
    </div>
  )
}

export default menu
