import React from 'react';
import './gallery.css';
import Img1 from '../../assets/img1.jpg';
import Img2 from '../../assets/img2.jpeg';
import Img3 from '../../assets/img3.jpg';

const images = [Img1,Img2,Img3];

const gallery = () => {
  return (
    <div className='gallery_container'>
        <div className="gallery_title">
            <h2>Gallery</h2>
        </div>
        <hr className="gline" />
        <div className="gallery_context">
            <p>
                Take a peek at our cozy space, latte art, and fresh bakes!
            </p>
        </div>
        <div className="glr_grd">
            {images.map((src, index)=> (
                <img key={index} src={src} alt={'img-${index}'} className='grid_item' />
            ))}
        </div>

      
    </div>
  );
};

export default gallery
