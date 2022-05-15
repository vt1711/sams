import React from 'react';
import { NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <>
       <div className="navbar">
          <div>
          <div className='navlogo'>
             SAMS
           </div>
           <div className="navoptions">
           <NavLink className="navlinks" activeClassName='active' to='/viewrecords'>View Records</NavLink>
           <NavLink  className="navlinks" activeClassName='active' to='/updaterecords'>Update Records</NavLink>
          </div>

          </div>
          
       </div> 
    </>
  )
}

export default Navbar