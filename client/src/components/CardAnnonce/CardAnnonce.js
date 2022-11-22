import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAreaChart, faBath, faBed, faHeart, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import "./CardAnnonce.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { likeAnnonce, unLikeAnnonce } from '../../redux/Slices/UserSlice'
import { useEffect } from 'react'

const CardAnnonce = ({ annonce }) => {

  const user = useSelector((state) => state.user?.user)

  const dispatch = useDispatch()
  const [clicked, setClicked] = useState(false);
 

  console.log(clicked)


  useEffect(() => {

    if (!!annonce?.likers?.filter(el => el === user?._id).length) setClicked(true);
    else setClicked(false);
  }, [ ]);

  return (
    <>
      <div className='box_annonce shadow' >
        <div className='pic'>
          <Link to={`/details/${annonce?.titre}`} state={{ annonce }}> <img src={annonce?.galerie[0]?.url} alt='' /></Link>
        </div>
        <div className='text'>
          <div className='category flex'>
            <span className={`CardAnnonce ${annonce?.typeAnnonce === "A Louer" ? "louer" : annonce?.typeAnnonce === "A vendre" ? "vendre" : "louer"}`}>{annonce?.typeAnnonce}</span>
            {
              <i className={`${(clicked === true) ? 'heart' : null}`}><FontAwesomeIcon icon={faHeart} onClick={() => {
                setClicked(!clicked);
                (clicked 
                  ? dispatch(unLikeAnnonce({ id_user: user?._id, annonceId: annonce?._id })) 
                  : dispatch(likeAnnonce({ id_user: user?._id, annonceId: annonce?._id })) ) 
                

              }} /></i>}
        </div>
        <h4>{annonce?.titre} </h4>
        <p>
          <i><FontAwesomeIcon icon={faLocationDot} /></i> {annonce?.adress}
        </p>
        <ul className='flex'>
          <li><i><FontAwesomeIcon icon={faBed} /></i> {annonce?.nbrChambre} </li>
          <li> <i><FontAwesomeIcon icon={faBath} /></i> {annonce?.nbrSalleDeBain}</li>
          <li> <i><FontAwesomeIcon icon={faAreaChart} /></i> {annonce?.surfaceHabitable}</li>
        </ul>
      </div>
      <div className='card_bottom'>

        <h3 className='btn3'>{annonce?.categorie}</h3>

        <div>
          <span>{annonce?.prix}</span> <label htmlFor=''>/DT</label>
        </div>
      </div>

    </div>

    </>
  )
}

export default CardAnnonce