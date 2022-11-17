import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Search.css'
import { useDispatch } from 'react-redux'
import { annonceFilter } from '../../redux/Slices/AnnonceSlice'
import { Link } from 'react-router-dom'


const Search = () => {
  const [text, setText] = useState({});
 const dispatch= useDispatch();
 

  return (
  
    <>
         <div className='container_box'>
          <div className='container'>
         <button>Trouver un offre</button>
       <Link to="/annonce"> <button>Déposer votre annonce</button> </Link>
       </div>
          <div className='tab flex'>
            <div className='box'>
              {/* <input list='offre' placeholder="Type de l'offre"
              onChange={(e) => setText({...text,typeAnnonce:e.target.value})}
               /> */}
              <select id='offre' onChange={(e) => setText({...text,typeAnnonce:e.target.value})}>
                <option>A Louer</option>
                <option>A vendre</option>

              </select>
            </div>
            <div className='box'>
            <input list='categorie' placeholder='Catégorie' 
           onChange={(e) => setText({...text,categorie:e.target.value})}/>
            <datalist id="categorie">
                                <option >Choisissez la catégorie</option>
                                <option>Appartement</option>
                                <option >Maison</option>
                                <option >Terrain</option>
                                <option >Local commercial</option>
                                <option >Bureau</option>
                                <option >Place de parc</option>
                                <option >Autres</option>
                            </datalist>
            </div>
            <div className='box'>
              <input list='delegation' placeholder='Délégation' 
                onChange={(e) => setText({...text,delegation:e.target.value})}/>
              <datalist id="delegation">
                        <option >Choisissez la delegation</option>
                        <option >Gabes Medina</option>
                        <option>Gabes Ouest</option>
                        <option >Gabes Sud</option>
                        <option >Ghannouch</option>
                        <option >ElHamma</option>
                        <option >Matmata</option>
                        <option >Mareth</option>
                        <option >Manzel El Habib</option>
                        <option >Metouia</option>
                        <option >Nouvelle Matmata</option>
                    </datalist>
            </div>
            <div className='box'>
              <h4>Recherche avancée </h4>
            </div>
            <button className='btn1'
             onClick={(e) => {
              dispatch(annonceFilter(text))
            }}>
            <i><FontAwesomeIcon icon={faSearch} /></i>
            </button>
          </div>
        </div>
    </>
  )
}

export default Search