
import "./DashUser.css"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserNav from './UserNav'
import { useDispatch, useSelector } from "react-redux"
import { annonceFilter, getAnnonceByIdUser } from "../../redux/Slices/AnnonceSlice"
import CardAnnonce from "../CardAnnonce/CardAnnonce"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const DashUser = () => {
  const [text, setText] = useState({})

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
        <select type="text" onChange={(e) => setText({...text,valide:e.target.value})}>
           <option >Tout</option>
            <option value="true">Validée</option>
            <option value="en cours de traitement">En attente</option>
            </select>
            <div className="filter-btn"  onClick={(e) => {
              dispatch(annonceFilter(text))
            }}> <i><FontAwesomeIcon icon={faSearch} /></i></div>
        </div>
       
      </div>
    </div>
    <div className="nav_main shadow">
    {userAnnonce?(
       <div className='content grid3 mtop'>
        {userAnnonce.map((el,i)=><CardAnnonce annonce={el} key={i}/>)}
       </div>
       )
    : (
    <p>
    Vous n'avez encore aucune annonce. Cliquez ici pour 
   <Link to="/annonce"> <button>Déposer votre 1ére annonce</button> </Link>
    </p>
) }
</div>
      </div>
    </div>
   
  )
}

export default DashUser