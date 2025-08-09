import React from 'react';

import cakeImage12 from '../assets/Image/abt_u.jpg'; 


export default function AboutUs() {
  return (
    <section id='aboutus'>
    <div className="container-fluid my-5 pt-5 ">
      <div className="row align-items-center">
         {/* Image Column */}
        <div className="col-md-6 text-center px-5">
          <img
            src={cakeImage12}
            alt="Delicious Cake"
            className="img-fluid rounded shadow zoom-image"
          />
        </div>
        {/* Text Column */}
        <div className="col-md-6 text-section px-5 ">
          <h1 className="heading text-chocolate pg   ">About Us</h1>
          <p className="description text-chocolate pg  ">
           Welcome to Cake Agepe where every bite feels like a hug!...

At Cake Agepe, baking isn't just our business ,it's our passion. What started as a small kitchen experiment turned into a full-blown love affair with flour, frosting, and flavor. From classic chocolate truffle cakes to our signature Dubai Choco Pistachio cake, each creation is made with love, precision, and a sprinkle of magic.

We believe that every celebration deserves a show-stopping dessert. That's why we use only the finest ingredients and craft each cake to perfection,whether it's for a birthday, wedding, or a sweet everyday treat.

Thank you for making us a part of your sweetest moments. Here's to more smiles, layers, and slices of happiness!

- With love,  
The Cake Agepe Team

 <div className='text-center mt-4 pt-4'> 
        <button className='btn see-more-btn'onClick={()=>{
          const abSection=document.getElementById('location');
          if(abSection){
            abSection.scrollIntoView({behavior:'smooth'});
          }
        }} >Know More</button> 
       </div> 
          </p>
        </div>
      </div>
    </div>
    </section>
  );
}