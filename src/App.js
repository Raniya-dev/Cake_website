import React from 'react';
import Navbar from './components/Navbar'; // adjust path if needed
import Home from './pages/Home';
import ThreeColumnLayout from './components/ThreecolumnLayout';
import AboutUs from './pages/AboutUs';
import Favourite from './components/favourite';
import VisitUs from './components/VisitUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <ThreeColumnLayout/>
      <AboutUs/>
      <Favourite/>
      <VisitUs/>
     
    </div>
  );
}

export default App;