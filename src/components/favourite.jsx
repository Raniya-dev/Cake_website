import React from 'react';
import './Favourite.css';

import Custfav1 from '../assets/Image/cust_fav_1.jpg';
import Custfav2 from '../assets/Image/cust_fav_2.jpg';
import Custfav3 from '../assets/Image/cust_fav_3.jpg';
import Custfav4 from '../assets/Image/cust_fav_4.jpg';
import Custfav5 from '../assets/Image/cust_fav_5.jpg';
import Custfav6 from '../assets/Image/cust_fav_6.jpg';

const cakes = [
  { name: "Chocolate Froasted Donuts", price: "₹599", image: Custfav1 },
  { name: "Blueberry Muffin", price: "₹649", image: Custfav2 },
  { name: "Mocha Macrons", price: "₹699", image: Custfav3 },
  { name: "Bubble Tea or Coffee", price: "₹150", image: Custfav4 },
  { name: "Homemade Hot Chocolate", price: "₹200", image: Custfav5 },
  { name: "Frothy Cold Coffee", price: "₹160", image: Custfav6 },
];

const Favourite = () => {
  return (
    <section id='favourite'>
    <div className="favourite-section text-chocolate  pg">
      <h2>Customer's Favourites</h2>
      <div className="favourite-grid text-chocolate pg">
        {cakes.map((item, index) => (
          <div className="cake-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <div className="cake-footer dancing-script">
              <span className="price">{item.price}</span>
              <button className="add-btn">+ Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Favourite;