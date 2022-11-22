import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import "./Avantages.css"

const Avantages = () => {
  return (
    <div className='avantage shadow'>
      <h2>Vos avantages</h2>
      <div className='avantage-box'>
        <div className='box1 shadow'>
          <h3><i><FontAwesomeIcon icon={faHouse} /></i>A votre service</h3>
          <p>
            Une équipe dynamique prête à vous servir et répondre à tous vos questions 24h/24… Vous souhaitez vendre, louer, acheter une maison en Tunisie n’hésitez pas à nous contacter.</p>

        </div>
        <div className='box1 shadow'>
          <h3><i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
            Rechercher simplement</h3>
          <p>
            Recherche et comparez les prix des meilleures propriétés des particuliers et des agences immobilières en Tunisie sur le marché. Découvrez nos outils de recherche adaptés, trouver le bien de vos rêves en un simple clic.</p>

        </div>
        <div className='box1 shadow'>
          <h3><i><FontAwesomeIcon icon={faPenToSquare} /></i>	Déposer une annonce</h3>
          <p>C’est simple et gratuit ! Des outils performants mis à votre disposition pour donner un meilleur avantage et une meilleure visibilité à votre annonce immobilière.</p>

        </div>
      </div>
    </div>
  )
}

export default Avantages