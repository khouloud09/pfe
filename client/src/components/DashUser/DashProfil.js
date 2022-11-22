import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import CardAnnonce from '../../components/CardAnnonce/CardAnnonce'
import { getAnnonceByIdUser } from '../../redux/Slices/AnnonceSlice'

import UserNav from './UserNav'


const DashProfil = () => {
 
   const user= useSelector((state)=>state.user?.user)
   const dispatch= useDispatch()
  
   useEffect(() => {
   dispatch(getAnnonceByIdUser({id_user:user?._id}))
   }, [dispatch]);

   const userAnnonce=useSelector(state=>state.annonce?.userAnnonce)
   

  return (
    <div className="list">
      <UserNav/>
      <div className="listContainer ">
      <div className="navbar">
      <div className="wrapper">
        <div className="search">
        <select type="text" >
           <option value="">Tout</option>
            <option value="1">Validée</option>
            <option value="2">En attente</option>
            </select>
        </div>
       
      </div>
    </div>
    <div className="nav_main shadow">
        <div className="left">
         <Link to="/DashUser/editProfil"> <button className="editButton">Edit</button></Link>
          <h1 className="title">Information</h1>
          <div className="item-profil">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt=""
              className="itemImg"
            />
            <div className="details">
              <h3 className="itemTitle">{user?.name} {user?.lastName}</h3>
              <div className="detailItem">
                <span className="itemKey">Email :</span>
                <span className="itemValue">{user?.email}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">{user?.phone}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">
                  {user?.adress}
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

export default DashProfil