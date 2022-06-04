import React from 'react';
import { NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        
          <div >
            <NavLink
              to='/'
              className={({ isActive }) => "navlogo" + ( isActive ? " activenavlink " : "")}
            >SAMS</NavLink>
          </div>
          <div className="navoptions">
            <NavLink
              to='/viewrecords'
              className={({ isActive }) => "navlinks" + ( isActive ? " activenavlink " : "")}
            >View Records</NavLink>
            <NavLink
              className={({isActive})=> "navlinks" + (isActive ? " activenavlink " : " ")}
              to='/updaterecords'>Update Records</NavLink>
          </div>

        

      </div>
    </>
  )
}

export default Navbar