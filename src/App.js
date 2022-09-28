import React from 'react';
import { useState } from 'react';
//importing the components

import Banner from './components/Banner'
import Experience from './components/Experience';
import Header from './components/Header'
import NavMobile from './components/NavMobile'
import TimeLine from './components/TimeLine';


const App = () => {

  const [navMobile, setNavMobile] = useState(true)

  return <div
    className='relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-bitRed before:-top-[200px] before:left-[170px] before:hidden before:lg:flex before:bg-no-repeat before:absolute '>
    <Header setNavMobile={setNavMobile} />
    <Banner />
    {/* Mobile Nav */}
    <div className={`${navMobile ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-48 transition-all`}>
      <NavMobile setNavMobile={setNavMobile} />
    </div>
    <Experience/>
    <TimeLine/>
  </div>
};

export default App;
