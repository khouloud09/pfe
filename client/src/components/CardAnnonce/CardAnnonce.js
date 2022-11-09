import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAreaChart, faBath, faBed, faHeart, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import "./CardAnnonce.css"
import { Link } from 'react-router-dom'

const CardAnnonce = ({annonce}) => {
  return (
    <>
         <div className='box_annonce shadow' >
              <div className='pic'>
                <img src={annonce?.galerie[0]?.url}  alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                 <span className={`CardAnnonce ${annonce.typeAnnonce === "A Louer" ? "louer" : annonce.typeAnnonce === "A vendre" ? "vendre" :"louer" }`}>{annonce.typeAnnonce}</span>
                  <i><FontAwesomeIcon icon={faHeart} /></i>
                </div>
               <Link to={`/details/${annonce.titre}`} state={{ annonce }}> <h4>{annonce.titre} </h4></Link>
                <p>
                <i><FontAwesomeIcon icon={faLocationDot} /></i> {annonce.adress}
                </p>
                <ul className='flex'>
                <li><i><FontAwesomeIcon icon={faBed} /></i> {annonce.nbrChambre} </li>  
                <li> <i><FontAwesomeIcon icon={faBath} /></i> {annonce.nbrSalleDeBain}</li>
                <li> <i><FontAwesomeIcon icon={faAreaChart} /></i> {annonce.surfaceHabitable}</li>
                </ul>
              </div>
              <div className='card_bottom'>
           
                  <h3 className='btn3'>{annonce.categorie}</h3>
             
                <div>
                <span>{annonce.prix}</span> <label htmlFor=''>/DT</label>
                </div>
              </div>
            </div>
            
    </>
  )
}

export default CardAnnonce