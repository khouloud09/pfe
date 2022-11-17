import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avantages from '../Avantages/Avantages'
import ListAnnonce from '../CardAnnonce/ListAnnonce'
import Footer from '../Footer/Footer'
import Search from '../Search/Search'
import "./Home.css"

const Home = () => {
  
  return (
    <div className='homee'>
     
       <Search />
       <ListAnnonce/>
       <Avantages/>
       <Footer/>
    </div>
  )
}

export default Home