import React ,{useContext}from 'react';
import { NavLink } from "react-router-dom";
import './navbar.css';
import { UserContext } from '../../App';

const Navbar = () => {
  const MenuItems =()=>{
    const {state,dispatch} = useContext(UserContext); 
    if(state===false){
      return(
            <>
              
            </>
      )
    }
    else{
      return(
        <>
           <NavLink
                to='/viewrecords/graphicalview'
                className={({ isActive }) => "navlinks" + ( isActive ? " activenavlink " : "")}
              >View Records</NavLink>
              <NavLink
                className={({isActive})=> "navlinks" + (isActive ? " activenavlink " : " ")}
                to='/updaterecords/updateexisting'>Update Records</NavLink>
            <NavLink
                className={({isActive})=> "navlinks" + (isActive ? " activenavlink " : " ")}
                to='/logout'>Logout</NavLink> 
        </>
      )
    }
  }
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
              <MenuItems/>
          </div>

        

      </div>
    </>
  )
}

export default Navbar