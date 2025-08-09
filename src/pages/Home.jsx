import React from 'react';

import cakeImage from '../assets/Image/home12.png'; 


export default function Home() {
  return (
    <section id='home'>
    <div className="container-fluid my-5  ">
      <div className="row align-items-center">
        {/* Text Column */}
        <div className="col-md-6 text-section px-5 navbar-ivory zoom-image ">
          <h1 className="heading text-chocolate pg navbar-ivory  ">WELCOME TO <span className='text-chocolate dancing-script navbar-ivory '>Cake Agaepe</span></h1>
          <h3 className="description text-chocolate dancing-script navbar-ivory  ">
            We bake with love and passion. Our cakes are not just desserts....they're moments to cherish!
          </h3>
        </div>

        {/* Image Column */}
        <div className="col-md-6 text-center px-5">
          <img
            src={cakeImage}
            alt="Delicious Cake"
            className="img-fluid rounded shadow zoom-image"
          />
        </div>
      </div>
    </div>
    </section>
  );
}