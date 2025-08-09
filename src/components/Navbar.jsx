import React from 'react';
import homeIcon from '../assets/Image/homeicon.jpg';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-ivory shadow-sm px-4 py-2">
      <div className="container-fluid">
        {/* Logo & Home icon */}
        <a className="navbar-brand d-flex align-items-center gap-2 text-chocolate" href="#">
          <img src={homeIcon} alt="Home" style={{width:'24px', height:'24px' }} />
          <span className='dancing-script'>Cake Agaepe</span>
        </a>

        {/* Toggle button for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* nav items */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-2">
            <li className="nav-item">
              <a className="nav-link text-chocolate custom-hover" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-chocolate custom-hover" href="#new">New</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-chocolate custom-hover" href="#aboutus">AboutUs</a>
            </li>
             <li className="nav-item">
              <a className="nav-link text-chocolate custom-hover" href="#favourite">Favourite</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-chocolate custom-hover" href="#location">Location</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}