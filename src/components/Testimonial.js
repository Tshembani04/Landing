import React from 'react';
//import components
import TestimonialSlider from '../components/TestimonialSlider'

const Testimonial = () => {
  return <section className='mb-64 lg:mb-48'>
    <div className="container mx-auto">
      <div className=" bg-purple-400/10 max-h-[400px] p-12 rounded-lg ">
        <div className='text-center' >
          <h2 className='text-3xl font-bold mb-6'>Boiler Room Development Partners</h2>
          <p className='max-w-2xl mx-auto mb-12 lg:mb-24'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptate amet autem animi architecto vitae veniam expedita pariatur placeat eius recusandae?</p>
        </div>
        {/* Slider */}
        <div >
          <TestimonialSlider/>
        </div>
      </div>
    </div>
  </section>;
};

export default Testimonial;
