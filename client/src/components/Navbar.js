 import React, { useState } from 'react'
 import {Link} from "react-router-dom"
import { nav } from './data/Data'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'


 const Navbar = () => {
  const [navList, setNavList] = useState(false)

   return (
     <div>
      <header>
        <div className='container flex'>
          <div className='logo'>
           <img className='homeLogo' src="./images/logoIMMO.png" alt="logo" />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <h4>
              <span>0</span> Mes Favoris
            </h4>
            <Link to="/login">
            <button className='btn1'>
              <i><FontAwesomeIcon icon={faArrowRightToBracket} /></i> Sign In
            </button>
            </Link>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
     </div>
   )
 }
 
 export default Navbar
