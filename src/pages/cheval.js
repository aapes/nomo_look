
import React from 'react';
import Navbar from './components/Navbar';
import Cphoto from './components/home_hotel_c/Cphoto';
import Cphotoa from './components/home_hotel_c/Cphotoa';
import Cphotob from './components/home_hotel_c/Cphotob';
import Cphotoc from './components/home_hotel_c/Cphotoc';
import Cphotod from './components/home_hotel_c/Cphotod';
import Cphotoe from './components/home_hotel_c/Cphotoe';
import Cphotof from './components/home_hotel_c/Cphotof';


const cheval = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Cphoto />
      <Cphotoa />
      <Cphotob />
      <Cphotoc />
      <Cphotod />
      <Cphotoe />
      <Cphotof />
    </div>
  );
};

export default cheval;
