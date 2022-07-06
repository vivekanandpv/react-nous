import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <>
      <NavLink to='/home'>
        <span className='mx-2'>Home</span>
      </NavLink>
      <NavLink to='/about'>
        <span className='mx-2'>About Us</span>
      </NavLink>
      <NavLink to='/contact'>
        <span className='mx-2'>Contact</span>
      </NavLink>
      <NavLink to='/department/report/2000'>
        <span className='mx-2'>Report</span>
      </NavLink>
      <NavLink to='/department/info'>
        <span className='mx-2'>Info</span>
      </NavLink>
    </>
  );
};

export default Navbar;
