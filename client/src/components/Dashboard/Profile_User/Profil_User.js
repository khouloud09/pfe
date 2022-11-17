import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getAnnonceByIdUser } from '../../../redux/Slices/AnnonceSlice'
import CardAnnonce from '../../CardAnnonce/CardAnnonce'
import NavbarDash from '../Navbar/NavbarDash'
import Sidebar from '../Sidebar/Sidebar'
import "./Profil_User.css"

const Profil_User = () => {
   const location= useLocation();
   const user=location.state.user
   const dispatch= useDispatch()

   useEffect(() => {
   dispatch(getAnnonceByIdUser({id_user:user?._id}))
   }, [dispatch]);

   const userAnnonce=useSelector(state=>state.annonce?.userAnnonce)

  return (
    <div className="single">
    <Sidebar />
    <div className="singleContainer">
      <NavbarDash />
      <div className="top">
        <div className="left">
          <button className="editButton">Edit</button>
          <h1 className="title">Information</h1>
          <div className="item-profil">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt=""
              className="itemImg"
            />
            <div className="details">
              <h3 className="itemTitle">{user.name} {user.lastName}</h3>
              <div className="detailItem">
                <span className="itemKey">Email :</span>
                <span className="itemValue">{user.email}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">{user.phone}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">
                  {user.adress}
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Annonces:</span>
                <span className="itemValue4">
                  {userAnnonce?.map((el,i)=><CardAnnonce annonce={el} key={i}/>)}
                </span>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    
    </div>
  </div>
  )
}

export default Profil_User