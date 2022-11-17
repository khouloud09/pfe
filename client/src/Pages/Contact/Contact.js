import React from 'react'
import Footer from '../../components/Footer/Footer'
import "./Contact.css"

const Contact = () => {
  return (
    <>
    <div className="back">
        <h1>Nous contacter</h1>
    </div>
    <div className='container2'>
    <div className='content shadow'>
      <h3>Entrons en contact</h3> <br />
      <div className='contact' >
        <input type='text' placeholder='Nom et Prenom' />
        <input type='text' placeholder='Email' />
      </div>
      <div className='contact' >
      <input type='text' placeholder='Telephone' />
      <input type='text' placeholder='Objet' />
      </div>
      <textarea cols='30' rows='10' placeholder='Votre message'></textarea>
      <button>Envoyer</button>
    </div>
  </div>
  <Footer/>
  </>
  )
}

export default Contact