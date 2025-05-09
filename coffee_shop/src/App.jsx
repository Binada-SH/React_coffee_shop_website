import React from 'react';
import './App.css'; 
import Navbar from './Components/navbar/navbar';
import Cta_btn from './Components/cta_btn/cta_btn';
import About from './Components/about/about';
import './assets/coffee.jpg';
import Menu from './Components/menu/menu';
import Gallery from './Components/gallery/gallery';
import Visitus from './Components/visitus/visitus';

const App = () => {
  return (
    <div className= 'app'>
      <section className= 'hero'>
      <Navbar/>
        <div className= 'hero_title'>
        <h1>Discover the <br/>Taste of Coffee <br/>at Brownie</h1>
      </div>
      <div className= "cta">
        <Cta_btn/>
      </div>
    </section>

    <section className= "about">
        <About/>
      </section>
      <section className="menu">
        <Menu/>
      </section>
      <section className="gallery">
        <Gallery/>
      </section>
      <section className="visitus">
        <Visitus/>
      </section>
    </div>
    
    
  )
}

export default App
