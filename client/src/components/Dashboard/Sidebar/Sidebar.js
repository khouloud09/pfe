import React from 'react';
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAddressCard, faArrowRightFromBracket, faBell, faChartLine, faChartSimple, faGear, faStore, faUser } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/Slices/UserSlice';

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo2">Acceuil</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/dashboard">
          <li>
          <i><FontAwesomeIcon icon={faChartLine} /></i>
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
            <i><FontAwesomeIcon icon={faUser} /></i>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/annonces" style={{ textDecoration: "none" }}>
            <li>
            <i><FontAwesomeIcon icon={faStore} /></i>
              <span>Annonces</span>
            </li>
          </Link>
    
          <p className="title">USEFUL</p>
          <li>
          <i><FontAwesomeIcon icon={faChartSimple} /></i>
            <span>Stats</span>
          </li>
          <li>
          <i><FontAwesomeIcon icon={faBell} /></i>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
        
          <li>
          <i><FontAwesomeIcon icon={faGear} /></i>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
          <i><FontAwesomeIcon icon={faAddressCard} /></i>
            <span>Profile</span>
          </li>
          <li>
          <i><FontAwesomeIcon icon={faArrowRightFromBracket} /></i>
            <span onClick={()=>{dispatch(logout());
              navigate("/")            }}>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar