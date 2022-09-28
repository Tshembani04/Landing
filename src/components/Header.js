import React from 'react';
//Import Components
import Logo from '../assets/img/logo.gif'
import Nav from '../components/Nav'
//import Icons
import {HiMenu} from 'react-icons/hi'

const Header = ({setNavMobile}) => {
  return <header className='py-6'>
    <div className='container mx-auto'>
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <a href="#">
          <img className='h-[50px] w-[50px]' src={Logo} alt=""  />
        </a>
        {/* Nav */}
        <Nav/>
        {/* Nav Mobile Button */}
        <HiMenu 
        onClick={()=>setNavMobile(true)}
        className="lg:hidden text-3xl text-white cursor-pointer" />
      </div>
    </div>
  </header>
};

export default Header;
