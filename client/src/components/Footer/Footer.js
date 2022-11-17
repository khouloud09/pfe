import React from "react"
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Gabes Immobilier</h1>
              <p>Zitouna Immobilier est une agence immobilière situe à Gabes. Elle est spécialisée dans la vente, la location et la gestion de tout type de bien immobilier.</p>
            </div>
            <button className='btn5'>Nous Contacter</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src="./images/logoIMMO.png" alt='' />
              <h2>Qu'est-ce que vous cherchez ?</h2>
              <p>Recherche et comparez les prix des meilleures propriétés des particuliers et des agences immobilières en Tunisie sur le marché. </p>

            
            </div>
          </div>

        </div>
      </footer>
      
    </>
  )
}

export default Footer
