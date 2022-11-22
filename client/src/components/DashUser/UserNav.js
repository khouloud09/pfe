import { faAddressCard, faArrowRightFromBracket, faChartLine, faGear, faHeart, faHome, faList, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./DashUser.css"
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/Slices/UserSlice'

const UserNav = () => {
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
        <Link to="/DashUser" >
        <li>
        <i><FontAwesomeIcon icon={faChartLine} /></i>
          <span>Dashboard</span>
        </li>
        </Link>
        <p className="title">LISTS</p>
           <Link to="/DashUser/mesAnnonces" style={{ textDecoration: "none" }}>
          <li>
          <i><FontAwesomeIcon icon={faList} /></i>
          <span>Mes annonces</span>
          </li>
        </Link>
      
         <Link to="/DashUser/favoris" style={{ textDecoration: "none" }}>
        <li>
        <i><FontAwesomeIcon icon={faHeart} /></i>
        <span>Mes favoris</span>
        </li>
        </Link>
      
        <p className="title">SERVICE</p>
      
        <li>
        <i><FontAwesomeIcon icon={faGear} /></i>
          <span>Settings</span>
        </li>
        <p className="title">USER</p>
    <Link to="/DashUser/profil">
        <li>
         
        <i><FontAwesomeIcon icon={faAddressCard} /></i>
          <span>Profile</span>
        </li>
        </Link>
        <li>
        <i><FontAwesomeIcon icon={faArrowRightFromBracket} /></i>
          <span onClick={()=>{dispatch(logout());
            navigate("/")            }}>Logout</span>
        </li>
      </ul>
    </div>
    
  </div>
    
  
  )
}

export default UserNav 