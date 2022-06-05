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
              className="navlogo"
            >SAMS</NavLink>
          </div>
          <div className="navoptions">
            <NavLink
              to='/viewrecords/graphicalview'
              className={({ isActive }) => "navlinks" + ( isActive ? " activenavlink " : "")}
            >View Records</NavLink>
            <NavLink
              className={({isActive})=> "navlinks" + (isActive ? " activenavlink " : " ")}
              to='/updaterecords/updateexisting'>Update Records</NavLink>
          </div>

        

      </div>
    </>
  )
}

export default Navbar