import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCheckSquare, faEnvelope, faHeart, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import MapShow from './MapShow';
import { useDispatch, useSelector } from 'react-redux';

import { getUserAnnonce } from '../../redux/Slices/AnnonceSlice';






const AnnonceDetails = () => {
   const location = useLocation();
   const { annonce } = location.state;


   const dispatch = useDispatch();
   const userAnn = useSelector((state) => state.annonce?.userAnn)

   useEffect(() => {
      dispatch(getUserAnnonce({ id_user: annonce.id_user }))
   }, [dispatch]);




   const imgs = annonce?.galerie
   const option = annonce?.options

   const [sliderData, setSliderData] = useState(imgs[0])

   const handleClick = (index) => {
      console.log(index);
      const slider = imgs[index];
      setSliderData(slider);
   }


   return (
      <div className="details-container">
         <div className='details shadow'>
            <div className="detail">
               <h1>{annonce.titre}</h1>
               <p> <i><FontAwesomeIcon icon={faLocationDot} /></i> {annonce.delegation}</p>
               <div className='slider-img'>
                  <img src={sliderData.url} alt="" height="300" width="500" />

                  <div className="flex-row">
                     {imgs?.map((el, i) =>
                        <div className="slider2" key={i}>

                           <img className={sliderData._id === i ? "clicked1" : null} src={el.url} onClick={() => handleClick(i)} alt='' height="70" width="100" />
                        </div>
                     )}
                  </div>
               </div>
               <div className='detail-row'>
                  <p> Déposée le : {annonce.dateConstruction}</p>
                  <i><FontAwesomeIcon icon={faHeart} />Ajouter aux favoris</i>
               </div>
               <div className='detail-row1'>
                  <h3>Description</h3>
                  <p>{annonce.description}</p>
               </div>
               <div className='detail-row1'>
                  <h3>Détails de bien</h3>
                  <div className='detail-avan'>
                     <p><span><FontAwesomeIcon icon={faArrowRight} /> Catégorie : </span> {annonce.categorie}</p>
                     <p><span><FontAwesomeIcon icon={faArrowRight} /> Prix : </span> {annonce.prix} /DT {annonce.duree}</p>
                     {annonce.surfaceHabitable && <p> <span><FontAwesomeIcon icon={faArrowRight} /> Surface habitable  : </span> {annonce.surfaceHabitable}</p>}
                     {annonce.surfaceTerrain && <p><span> <FontAwesomeIcon icon={faArrowRight} /> Surface terrain : </span> {annonce.surfaceTerrain}</p>}

                     {annonce.nbrChambre && <p><span><FontAwesomeIcon icon={faArrowRight} /> Nb.chambres : </span> {annonce.nbrChambre}</p>}
                     {annonce.nbrSalleDeBain && <p><span><FontAwesomeIcon icon={faArrowRight} /> Nb.salle de bain : </span>{annonce.nbrSalleDeBain}</p>}
                     {annonce.nbrPiece && <p><span><FontAwesomeIcon icon={faArrowRight} /> Piéces (Totale) : </span>{annonce.nbrPiece}</p>}
                  </div>
               </div>
               <div className='detail-row1'>
                  <h3>Avantages</h3>
                  <div className='detail-avan'>
                     {annonce.options && <p>{option?.map((el, i) =>
                        <p key={i}><span><FontAwesomeIcon icon={faCheckSquare} /></span> {el} </p>)}</p>
                     }
                  </div>
               </div>
               <div className='detail-row1'>
                  <h3>Localisation</h3>
                  <p className='leaflet' >
                     <MapShow position={annonce.localisationMap} style={{ position: "relative", width: "100%", height: "400px" }} />
                  </p>
               </div>
               <div className='detail-row1'>
                  <h3>Demander plus d'info ?</h3> <p><Link to="/contact">Nous Contacter</Link></p></div>

            </div>
         </div>
         {userAnn?.map((annonce, i) => (
            <div className="details-user shadow">
               <div className="detail">
                  <h1>Contacter l'annonceur</h1>
               </div>
               <div className="item-profil">
                  <img
                     src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                     alt=""
                     className="itemImg"
                  />
               </div>
               <div className="details">

                  <h3 className="itemTitle">{annonce?.id_user.name} {annonce?.id_user.lastName}</h3>
               </div>
               <div className="detailItem">
                  <span className="itemKey"><FontAwesomeIcon icon={faEnvelope} /></span>
                  <span className="itemValue">{annonce?.id_user.email}</span>
               </div>
               <div className='numero' >
                  <button><span> <FontAwesomeIcon icon={faPhone} />
                     {annonce?.id_user.phone}</span></button>

               </div>


            </div>
         ))}
      </div>
   )
}

export default AnnonceDetails