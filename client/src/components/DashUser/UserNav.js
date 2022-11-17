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
    // <div className='dash_nav'>
    //     <div className='nav_user'>
    //     <div className="wrapper">
        
    //     <div className="search">
    //       <select type="text" >
    //         <option value="">Tout</option>
    //         <option value="1">Validée</option>
    //         <option value="2">Expirée</option>
    //         <option value="2">En attente</option>
    //         </select>
      
    //     </div>
    //     <div className="items">
    //     <div className="item">
    //       <i><FontAwesomeIcon icon={faHome} /></i>
    //        <Link to="/"> <span>Acceuil</span></Link>
    //       </div>
    //       {/* <div className="item">
    //       <Link to="/" aria-current="page"><span>Accueil</span></Link>
    //       </div> */}
    //       <div className="item">
    //       <i><FontAwesomeIcon icon={faList} /></i>
    //       <Link to="/DashUser/mesAnnonces" ><span>Mes annonces</span></Link>
    //       </div>
    //       <div className="item">
    //       <i><FontAwesomeIcon icon={faHeart} /></i>
    //       <Link to="/DashUser/favoris" ><span>Mes favoris</span></Link>
    //       </div>
          
    //       <div className="item">
            
    //       </div>
    //       <div className="item">
    //       <i><FontAwesomeIcon icon={faUser} /></i>
    //       <span>Profile</span>
    //         {/* <img
    //        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"              alt=""
    //           className="avatar"
    //         /> */}
    //       </div>
    //     </div>
    //   </div>
    //     </div>
    //     <hr />
      
    // </div>
  )
}

export default UserNav 