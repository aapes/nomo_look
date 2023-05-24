
import React from 'react';
import Navbar from './components/Navbar';
import Jphoto from './components/home_hotel_j/Jphoto';
import Jphotoa from './components/home_hotel_j/Jphotoa';
import Jphotob from './components/home_hotel_j/Jphotob';
import Jphotoc from './components/home_hotel_j/Jphotoc';




const Joali = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Jphoto />
      <Jphotoa />
      <Jphotob />
      <Jphotoc />
    </div>
  );
};

export default Joali;
