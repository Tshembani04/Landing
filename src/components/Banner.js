import React from 'react';
//import components
import Users from '../components/Users'

//import Image

import Img from '../assets/img/headset-4.png';

const Banner = () => {
  return (
    <section className='min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left'>
      <div className='container mx-auto' >
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <div>
            <h1 className='text-3xl font-bold mb-8 lg:text-5xl text-text lg:leading-snug' >Let's Explore <br /> Three Dimensional Visually.</h1>
            <p className='font-secondary mb-12 max-w-[640px] mx-auto text-rose-600 lg:mx-0' >Innovation and Consulting Hub - Delivering Learning, Digital Production, Safety and Management Consulting Solutions

            </p>
            {/* button */}
            <div className='flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start ' >
              <button className='btn' >Explore Our Services</button>
              <a className='border-b-2 border-transparent hover:border-white transition ease-out duration-200' href="#">Contact Us</a>
            </div>
            <Users />
          </div>
          {/* image */}
          <div>
            <img src={Img} alt="Banner Image" />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Banner;
