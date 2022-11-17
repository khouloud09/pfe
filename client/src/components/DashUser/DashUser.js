
import "./DashUser.css"
import React from 'react'
import { Link } from 'react-router-dom'
import UserNav from './UserNav'

const DashUser = () => {
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
            <option value="2">Expirée</option>
            <option value="2">En attente</option>
            </select>
        </div>
       
      </div>
    </div>
    <div className="nav_main shadow">
             <p>
             Vous n'avez encore aucune annonce. Cliquez ici pour 
            <Link to="/annonce"> <button>Déposer votre 1ére annonce</button> </Link>
             </p>
         </div>
      </div>
    </div>
    // <div className='dash_nav'>
        
    //   <UserNav/>
    //     <div className="nav_main shadow">
    //         <p>
    //         Vous n'avez encore aucune annonce. Cliquez ici pour 
    //         <Link to="/annonce"> <button>Déposer votre 1ére annonce</button> </Link>
    //         </p>
    //     </div>
    // </div>
  )
}

export default DashUser