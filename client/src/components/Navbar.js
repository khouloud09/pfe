import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { nav } from './data/Data'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { logout, userCurrent } from '../redux/Slices/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getAnnonceById } from '../redux/Slices/AnnonceSlice'


const Navbar = ({favLength}) => {

  const [navList, setNavList] = useState(false)
  const User = useSelector((state) => state.user?.user)
  const isAuth = localStorage.getItem('token')
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
      dispatch(getAnnonceById());
    }
  }, [dispatch, isAuth]);

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
            {isAuth ? (
              <>
                <h4>
                  <span>{favLength}</span> Mes Favoris
                </h4>
                {User?.isAdmin ? (
                  <>
                  <Link to="/dashboard">
                    <div className="compte"  >
                      <i><FontAwesomeIcon icon={faUser} style={{ width: "50px" }} /></i></div>
                  </Link>
                  <Link to="/">
                  <button className='btn1' onClick={()=>{dispatch(logout()) }}>
                    <i><FontAwesomeIcon icon={faArrowRightToBracket} /></i> Logout
                  </button>
                </Link>
                </>
                )
                  : (
                    <>
                    <Link to="/DashUser">
                      <div className="compte" >
                        <i><FontAwesomeIcon icon={faUser} style={{ width: "50px" }} /></i></div>
                    </Link>
                    <Link to="/">
              <button className='btn1' onClick={()=>{dispatch(logout()) }}>
                <i><FontAwesomeIcon icon={faArrowRightToBracket} /></i> Logout
              </button>
            </Link>
                    </>
                  )
                }
              </>
            ) : (<Link to="/login">
              <button className='btn1'>
                <i><FontAwesomeIcon icon={faArrowRightToBracket} /></i> Sign In
              </button>
            </Link>
            )}
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
