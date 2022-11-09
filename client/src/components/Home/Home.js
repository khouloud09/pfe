import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ListAnnonce from '../CardAnnonce/ListAnnonce'
import Search from '../Search/Search'
import "./Home.css"

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className='immobilier'>
      <button>Trouver un offre</button>
       <Link to="/annonce"> <button>Déposer votre annonce</button> </Link>
       <Search setSearchTerm={setSearchTerm}/>
       <ListAnnonce searchTerm={searchTerm}/>
    </div>
  )
}

export default Home