import React from 'react';
// import images
import Avatar1 from '../assets/img/avt1.jpg';
import Avatar2 from '../assets/img/avt2.png';
import Avatar3 from '../assets/img/avt3.jpg';
import Avatar4 from '../assets/img/avt4.png';
// import icons
import { BsFillCircleFill } from 'react-icons/bs';

const Users = () => {
  return (
    <div
      className='flex flex-col justify-center items-center space-x-5 space-y-2 lg:flex-row lg:space-y-0 lg:justify-start'
      data-aos='fade-down'
      data-aos-delay='900'
    >
      <div className='flex  space-x-4'>
        <div className='w-24 h-12 rounded-full'>
          <img src={Avatar1} alt='' />
        </div>
        <div className='w-24 h-12 rounded-full'>
          <img src={Avatar2} alt='' />
        </div>
        <div className='w-24 h-12 rounded-full'>
          <img src={Avatar3} alt='' />
        </div>
        <div className='w-24 h-12 rounded-full'>
          <img src={Avatar4} alt='' />
        </div>
      </div>
      <div className='flex items-center space-x-2 font-secondary font-medium '>
        <BsFillCircleFill className='text-xs text-green-300 animate-pulse' />
        <h2 className='text-sm font-bold my-4'>50+ Boiler Room Development Partners</h2>
      </div>
    </div>
  );
};

export default Users;