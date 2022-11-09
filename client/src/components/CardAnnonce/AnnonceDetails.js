import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faHeart, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import AddMap from '../Annonce/AddMap';
import MapShow from './MapShow';

const AnnonceDetails = () => {
    const location = useLocation();
    const {annonce}=location.state;

 
  return (
    <div className='detail'>
        <h1>{annonce.titre}</h1>
        <i><FontAwesomeIcon icon={faLocationDot} /></i> {annonce.localisationMap.lat}/{annonce.localisationMap.lng}
        <div className='swiper'>
        {annonce?.galerie?.map((el,i)=><img key={i} src={el.url} alt='' />)}
        </div>
        <div>
           <p> Déposée le: {annonce.dateConstruction}</p>
           <button> <i><FontAwesomeIcon icon={faHeart} /></i>AJOUTER AU FAVORIS</button>
        </div>
     <div>
        <h4>Description</h4>
        <p>{annonce.description}</p>
     </div>
     <div>
        <h4>Détails de bien</h4>
        <p>Type : {annonce.categorie}</p>
        <p>Surface habitable  : {annonce.surfaceHabitable}</p>
        <p>Surface terrain : {annonce.surfaceTerrain}</p>
        <p>Prix : {annonce.prix}</p>
        <p>Nb.chambres : {annonce.nbrChambre}</p>
        <p>Nb.salle de bain : {annonce.nbrSalleDeBain}</p>
        <p>Piéces (Totale) : {annonce.nbrPiece}</p>
     </div>
     <div>
     <h4>Avantages</h4>
     <p>{annonce.option}</p>
     </div>
     <div>
        <h4>Localisation</h4>
        <MapShow position={annonce.localisationMap}/>
     </div>
     <div>Demander plus d'info</div>
    </div>
  )
}

export default AnnonceDetails