import React from 'react';
import { useSelector} from 'react-redux';

import "./CardAnnonce.css"
import CardAnnonce from './CardAnnonce';

const ListAnnonce = () => {
    
    const Annonces = useSelector((state)=>state.annonce?.annonces);
    
  return (
   <>
          <h2>NOS ANNONCES LES PLUS RÉCENTES </h2>
         <div className='content grid3 mtop'>
          
        {Annonces?.map((annonce, index) => 
    <CardAnnonce key={index} annonce={annonce}/>
           
        )}
      </div>
      </>
  )
}

export default ListAnnonce