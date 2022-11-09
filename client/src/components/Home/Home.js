import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ListAnnonce from '../CardAnnonce/ListAnnonce'
import Search from '../Search/Search'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <button>Trouver un offre</button>
       <Link to="/annonce"> <button>Déposer votre annonce</button> </Link>
       <Search setSearchTerm={setSearchTerm}/>
       <ListAnnonce searchTerm={searchTerm}/>
    </div>
  )
}

export default Home