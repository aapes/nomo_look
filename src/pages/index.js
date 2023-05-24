import React from 'react';
import Navbar from './components/Navbar';
import DarkModeToggle from './components/DarkModeToggle'; 
import HeroSection from "./components/HeroSection";
import Photosf from "./components/Photosf";
import HotelsTwo from './components/HotelsTwo';
import HotelsThere from './components/HotelsThere';
import Hotelshome from "./components/Hotelshome";
import Toplink from './components/Toplink';





function Index() {
  return (
    <div>
      <Navbar />
      <DarkModeToggle /> 
      <HeroSection />
      <HotelsTwo />
      <Hotelshome />
      <HotelsThere />
      <Photosf /> 
      <Toplink />
    </div>
  );
}

export default Index;