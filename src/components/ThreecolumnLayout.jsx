
import React from 'react';

import fav1 from '../assets/Image/sqr12.jpg';
import fav2 from '../assets/Image/new_ar_2.png';
import fav3 from '../assets/Image/new_ar_3.jpg';

export default function ThreeColumnLayout() {
  return (
    <section id='new'>
    
    <div className="container my-5 pt-5">

     
      <div className="row text-center">
        <h1 className="feature-title my-3 mx-3"> New Arrivals</h1>
        {/* Column 1 */}
        <div className="col-md-4">
          <img src={fav1} alt="Feature 1" className="img-fluid mb-4 feature-img" />
          <h4 className="feature-title">Chocolate Truffle Cake</h4>
          <p className="feature-text">Rich,Moist,Chocolate Layers filled with creamy Chocolate Ganche</p>
        </div>

        {/* Column 2 */}
        <div className="col-md-4">
          <img src={fav2} alt="Feature 2" className="img-fluid mb-3 feature-img" />
          <h4 className="feature-title">Red Velvet Cake</h4>
          <p className="feature-text">Soft buttermilk cake with a hint of cocoa and a cream cheese frosting</p>
        </div>

        {/* Column 3 */}
        <div className="col-md-4">
          <img src={fav3} alt="Feature 3" className="img-fluid mb-3 feature-img" />
          <h4 className="feature-title">Dubai Choco-Pistachio Cake</h4>
          <p className="feature-text">Fragrant Middle Eastern-Inspired cake with roasted pistachios and cardamom.</p>
        </div>
       
      </div>
       <div className='text-center mt-4'> 
        <button className='btn see-more-btn'onClick={()=>{
          const favSection=document.getElementById('favourite');
          if(favSection){
            favSection.scrollIntoView({behavior:'smooth'});
          }
        }} >See More items</button> 
       </div> 
      
    </div>
    </section>
  );
}