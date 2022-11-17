import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faHeart, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MapShow from './MapShow';
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const AnnonceDetails = () => {
    const location = useLocation();
    const {annonce}=location.state;

 
  return (
    <div className='detail'>
        <h1>{annonce.titre}</h1>
       <p> <i><FontAwesomeIcon icon={faLocationDot} /></i> {annonce.adress}</p>
       <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}

        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="project-slider"
      >
        {annonce?.galerie?.map((el,i)=>
        <SwiperSlide key={i}>
<img  src={el.url} alt='' />
         </SwiperSlide>
         )}
        </Swiper>
        <div>
        {annonce.dateConstruction &&   <p> Déposée le: {annonce.dateConstruction}</p>}
           <button> <i><FontAwesomeIcon icon={faHeart} /></i>AJOUTER AU FAVORIS</button>
        </div>
     <div>
        <h4>Description</h4>
        <textarea>{annonce.description}</textarea>
     </div>
     <div>
        <h4>Détails de bien</h4>
        <p>Type : {annonce.categorie}</p>
        {annonce.surfaceHabitable && <p>Surface habitable  : {annonce.surfaceHabitable}</p>}
        {annonce.surfaceTerrain && <p>Surface terrain : {annonce.surfaceTerrain}</p>}
        <p>Prix : {annonce.prix}</p>
        {annonce.nbrChambre && <p>Nb.chambres : {annonce.nbrChambre}</p> }
        {annonce.nbrSalleDeBain && <p>Nb.salle de bain : {annonce.nbrSalleDeBain}</p>}
        {annonce.nbrPiece && <p>Piéces (Totale) : {annonce.nbrPiece}</p>}
     </div>
     <div>
     <h4>Avantages</h4>
     {annonce.option && <p>{annonce.option}</p>}
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