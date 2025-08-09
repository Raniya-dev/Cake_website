import React from 'react';
import {FaInstagram,FaFacebookF,FaYoutube} from 'react-icons/fa';
export default function VisitUs() {
  const chocolate = "#5d2a00"; 

  return (
    <section id="location" className="visit-us-section py-5" style={{ backgroundColor: "#fff8f0" }}>
      <div className="container text-center">
        <h2 className="mb-3 dancing-script" style={{ color: chocolate, fontSize: '2.5rem' }}>
          Visit Us
        </h2>
        <p className="mb-5" style={{ color: chocolate }}>
          Where your each Bite feels like a Hug!...
        </p>

        <div className="row justify-content-center text-start">
          <div className="col-md-3 mb-3">
           
          </div>

          {/* Address */}
          <div className="col-md-3 mb-3">
            <h5 style={{ color: chocolate }}>Address</h5>
            <p style={{ color: chocolate }}>
              Chala Street <br />
              Chala, kannur<br />
              9AM - 11PM
            </p>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-3">
            <h5 style={{ color: chocolate }}>Contact Me</h5>
            <p style={{ color: chocolate }}>
              cake_agaepe@email.com<br />
              +00 987 654 321
            </p>
          </div>

          {/* Social Icons */}
          <div className="col-md-3 mb-3">
            <h5 className='text-chocolate  pg'>Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="https://instagram.com"target="_blank" rel="noopener noreferrer">
              <FaInstagram style={{color:'#7B3F00',fontSize:'1.4rem'}}/>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"  >
                <FaFacebookF style={{color:'#7B3F00',fontSize:'1.4rem'}}/>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube style={{color:'#7B3F00',fontSize:'1.4rem'}}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}