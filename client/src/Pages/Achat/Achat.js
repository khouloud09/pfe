import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CardAnnonce from '../../components/CardAnnonce/CardAnnonce';
import { annonceFilter } from '../../redux/Slices/AnnonceSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./Achat.css"
import Footer from '../../components/Footer/Footer';

const Achat = () => {
    const Annonces = useSelector((state)=>state.annonce?.annonces);
    const dispatch = useDispatch();
    const [text, setText] = useState({});
   

    useEffect(() => {
  dispatch (annonceFilter())
      }
    , [dispatch]);
    
  return (
    <>
    <div className="back">
        <h1>Liste des biens à vendre</h1>
    </div>
    <div className='achat_acc'> 
    <div className='achat'>
       
        <div className='achat-search shadow'>
        <div className='box'>
              <h3>Trouver un bien </h3>
            </div>
            <div className='box'>
            <input list='categorie' placeholder='Catégorie'
             onChange={(e) => setText({...text,categorie:e.target.value})} />
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
            }}
  >
            <i><FontAwesomeIcon icon={faSearch} /></i>
            </button>
        </div>
        <div className='content grid3 mtop'>
        {Annonces?.filter(el=>el.typeAnnonce==="A vendre").map((annonce, index) => 
    <CardAnnonce key={index} annonce={annonce}/>
           
        )}
        </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Achat