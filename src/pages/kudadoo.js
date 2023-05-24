
import React from 'react';
import Navbar from './components/Navbar';
import Maldives from './components/home_hotel_k/Maldives';
import Mtext from './components/home_hotel_k/Mtext'; 
import Mphotos from './components/home_hotel_k/Mphotos'; 
import Mtestx from './components/home_hotel_k/Mtestx';
import Mtestz from './components/home_hotel_k/Mtestz';  
import Mphotoa from './components/home_hotel_k/Mphotoa';
import Mphotob from './components/home_hotel_k/Mphotob';

const kudadoo = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Mphotos />
      <Mtext />
      <Maldives />
      <Mtestx />
      <Mphotoa />
      <Mtestz />
      <Mphotob />
    
    </div>
  );
};

export default kudadoo;
