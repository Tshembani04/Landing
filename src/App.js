import React from 'react';
import { useState } from 'react';
//importing the components

import Banner from './components/Banner'
import Experience from './components/Experience';
import Header from './components/Header'
import Headsets from './components/Headsets';
import NavMobile from './components/NavMobile'
import Testimonial from './components/Testimonial';
import TimeLine from './components/TimeLine';
import Video from './components/Video';


const App = () => {

  const [navMobile, setNavMobile] = useState(true)

  return <div
    className='relative overflow-hidden'>
    <Header setNavMobile={setNavMobile} />
    <Banner />
    {/* Mobile Nav */}
    <div className={`${navMobile ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-48 transition-all`}>
      <NavMobile setNavMobile={setNavMobile} />
    </div>
    <Experience/>
    <TimeLine/>
    <Video/>
    <Headsets/>
    <Testimonial/>
  </div>
};

export default App;
