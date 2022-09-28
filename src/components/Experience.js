import React from 'react';

//import images

import Img1 from '../assets/img/exp-img1.png'
import Img2 from '../assets/img/exp-img2.png'

const Experience = () => {
  return <section className='mb-12 lg:mt-16 '>
    <div className='container mx-auto lg:mt-6'>
      <div className='flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row '>
        <div className='flex-1 flex space-x-6 items-center lg:space-x-12'>
          {/* Image */}
          <div className='self-start'>
            <img src={Img1} alt="image1" />
          </div>
          <div className='self-end'>
            <img src={Img2} alt="image1" />
          </div>
        </div>
        {/* Text */}
        <div className='flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0'>
          <h2 className='text-3xl font-bold mb-6'>
            About The Boiler Room
          </h2>
          <p className='font-secondary mb-6'>
            The Boiler Room team delivers innovative visual learning and digital production solutions across all industries, globally since 1999.
            Internationally recognised, we have been delivering award winning VR and learning solutions, for over 10 years.
            Our VR expertise spans 9 years, and we consider ourselves global VR pioneers, with proven technology and solutions.
            Globally we have one of the largest 3D libraries, which includes scenes, scenarios, machinery, and people across all industries.
            Our 3D library is supported by an extensive video and photo repository that spans 25+ years.
          </p>
          {/* <button className='btn'>Get in now</button> */}
        </div>
      </div>
    </div>
  </section>;
};

export default Experience;
