import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { UserContext } from "../../App";

const Navbar = () => {
  const MenuItems = () => {
    const { state, dispatch } = useContext(UserContext);
    if (state === true) {
      return (
        <>
          <NavLink
            to="/viewrecords/graphicalview"
            className={({ isActive }) =>
              "navlinks" + (isActive ? " activenavlink " : "")
            }
          >
            View Records
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "navlinks" + (isActive ? " activenavlink " : " ")
            }
            to="/updaterecords/updateexisting"
          >
            Update Records
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "navlinks" + (isActive ? " activenavlink " : " ")
            }
            to="/logout"
          >
            Logout
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "navlinks" + (isActive ? " activenavlink " : " ")
            }
            to="/features"
          >
            Features
          </NavLink>
        </>
      );
    } else {
      return (
        <>
          <NavLink
            className={({ isActive }) =>
              "navlinks" + (isActive ? " activenavlink " : " ")
            }
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "navlinks" + (isActive ? " activenavlink " : " ")
            }
            to="/features"
          >
            Features
          </NavLink>
        </>
      );
    }
  };
  return (
    <>
      <div className="navbar">
        <div className="navlogo">
          {/* <NavLink to="/" className="navlogo">
            SAMS
          </NavLink> */}
          SAMS
        </div>
        <div className="navoptions">
          <MenuItems />
         
        </div>
      </div>
    </>
  );
};

export default Navbar;
