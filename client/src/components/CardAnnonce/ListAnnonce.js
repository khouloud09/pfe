import React from 'react';
import { useSelector} from 'react-redux';

import "./CardAnnonce.css"
import CardAnnonce from './CardAnnonce';

const ListAnnonce = () => {
    
    const Annonces = useSelector((state)=>state.annonce?.annonces);
    
  return (
   <>
   <div className='list_annonce'>
          <h2>NOS ANNONCES LES PLUS RÉCENTES </h2>
         <div className='content grid3 mtop'>
          
        {Annonces?.filter((el=>el.valide === "true")).map((annonce, index) => 
    <CardAnnonce key={index} annonce={annonce} />
           
        )}
      </div>
      </div>
      </>
  )
}

export default ListAnnonce