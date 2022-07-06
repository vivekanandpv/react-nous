import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <>
      <NavLink to='home'>
        <span className='mx-2'>Home</span>
      </NavLink>
      <NavLink to='about'>
        <span className='mx-2'>About Us</span>
      </NavLink>
      <NavLink to='contact'>
        <span className='mx-2'>Contact</span>
      </NavLink>
    </>
  );
};

export default Navbar;
