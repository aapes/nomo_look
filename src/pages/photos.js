

import React from 'react';
import Navbar from './components/Navbar';
import DarkModeToggle from './components/DarkModeToggle'; 
import HeroSection from "./components/HeroSection";
import Photosf from "./components/Photosf";
import Hero from './components/Hero';
import HotelsTwo from './components/HotelsTwo';
import HotelsThere from './components/HotelsThere';
import Hotelshome from "./components/Hotelshome"



function Photos() {
  return (
    <div>
      <Navbar />
      <DarkModeToggle /> 
      <HeroSection />
      <HotelsTwo />
      <Hotelshome />
      <HotelsThere />
      <Photosf />
      <Hero />
    </div>
  );
}

export default Photos;

