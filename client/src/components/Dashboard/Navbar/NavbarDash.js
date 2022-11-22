import "./NavbarDash.css";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMessage,  faSearch } from '@fortawesome/free-solid-svg-icons'
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";

const NavbarDash = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <i><FontAwesomeIcon icon={faSearch} /></i>
        </div>
        <div className="items">
          <div className="item">
            
          </div>
          <div className="item">
          <i><FontAwesomeIcon icon={faMessage} /></i>
            <div className="counter">0</div>
          </div>
          <div className="item">
          <i><FontAwesomeIcon icon={faBell} /></i>
            <div className="counter">0</div>
          </div>
          <div className="item">
            
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDash ;