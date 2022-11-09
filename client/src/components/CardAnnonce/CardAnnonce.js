import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAreaChart, faBath, faBed, faHeart, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import "./CardAnnonce.css"
import { Link } from 'react-router-dom'

const CardAnnonce = ({annonce}) => {
  return (
    <>
         <div className='box_annonce shadow' >
              <div className='img'>
                <img src={annonce?.galerie[0]?.url}  alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                 <span className={`CardAnnonce ${annonce.typeAnnonce === "A Louer" ? "reserver" : annonce.typeAnnonce === "A Vendre" ? "#25b579" : "#ff9800" }`}>{annonce.typeAnnonce}</span>
                  <i><FontAwesomeIcon icon={faHeart} /></i>
                </div>
               <Link to={`/details/${annonce.titre}`} state={{ annonce }}> <h4>{annonce.titre} </h4></Link>
                <p>
                <i><FontAwesomeIcon icon={faLocationDot} /></i> {annonce.localisationMap.lat}/{annonce.localisationMap.lng}
                </p>
                <ul>
                <li><i><FontAwesomeIcon icon={faBed} /></i> {annonce.nbrChambre} </li>  
                <li> <i><FontAwesomeIcon icon={faBath} /></i> {annonce.nbrSalleDeBain}</li>
                <li> <i><FontAwesomeIcon icon={faAreaChart} /></i> {annonce.surfaceHabitable}</li>
                </ul>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{annonce.prix}</button> <label htmlFor=''>/DT</label>
                </div>
                <span>{annonce.categorie}</span>
              </div>
            </div>
          
    </>
  )
}

export default CardAnnonce