import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { UserContext } from "../../App";

const Navbar = () => {
  const hamburgertoggle = () => {
    let hamburgericon = document.getElementById("hamburgericon");
    let hamburgerlist = document.getElementById("hamburgerlist");
    let hamburgerdiv = document.getElementById("hamburgerdiv");

    if (hamburgerlist.style.display === "none") {
      
        hamburgericon.style.color = "blueviolet";
        hamburgerdiv.classList.add("hamburgeropen");
        hamburgerdiv.classList.remove("hamburgerclose");
        hamburgerlist.style.display="block"
      
    } else {
      
        hamburgericon.style.color = "white";
        hamburgerdiv.classList.remove("hamburgeropen");
        hamburgerdiv.classList.add("hamburgerclose");
        hamburgerlist.style.display="none";
      
    }
  };

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
        <div className="hamburgerdiv" id="hamburgerdiv">
          <div
            className="material-symbols-outlined hamburgericon"
            id="hamburgericon"
            onClick={() => {
              hamburgertoggle()
            }}
          >
            menu
          </div>
          <div className="hamburgerlist" id="hamburgerlist">
            <MenuItems />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
