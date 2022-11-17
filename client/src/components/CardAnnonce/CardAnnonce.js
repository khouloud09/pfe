import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAreaChart, faBath, faBed, faHeart, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import "./CardAnnonce.css"
import { Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addFavoris, getAnnonceById } from '../../redux/Slices/AnnonceSlice'
import { likeAnnonce, unLikeAnnonce } from '../../redux/Slices/UserSlice'
import { useEffect } from 'react'

const CardAnnonce = ({ annonce }) => {

  const user = useSelector((state) => state.user?.user)
  const dispatch = useDispatch()
  const [clicked, setClicked] = useState(false);
  const [liked, setLiked] = useState(false);
  const like = () => {

    dispatch(likeAnnonce({ id_user: user._id, annonceId: annonce._id }))
    setLiked(true);
  };

  const unlike = () => {

    dispatch(unLikeAnnonce({ id_user: user._id, annonceId: annonce._id }))
    setLiked(false);
  };


  useEffect(() => {
    if (annonce.likers.includes({ id_user: user._id })) setLiked(true);
    else setLiked(false);
  }, [{ id_user: user._id }, annonce.likers, liked]);

  return (
    <>
      <div className='box_annonce shadow' >
        <div className='pic'>
          <Link to={`/details/${annonce?.titre}`} state={{ annonce }}> <img src={annonce?.galerie[0]?.url} alt='' /></Link>
        </div>
        <div className='text'>
          <div className='category flex'>
            <span className={`CardAnnonce ${annonce?.typeAnnonce === "A Louer" ? "louer" : annonce?.typeAnnonce === "A vendre" ? "vendre" : "louer"}`}>{annonce?.typeAnnonce}</span>
            {{ id_user: user._id } && liked === false && (
              <i className={`${(clicked === true) ? 'heart' : null}`}><FontAwesomeIcon icon={faHeart} onClick={() => {
                setClicked(true);
                like();


              }} /></i>
            )
            }
            {/* {{id_user:user._id} && liked  &&(
                  <i className={`${(clicked === true)?'heart':null}`}><FontAwesomeIcon icon={faHeart} onClick={()=>{
                    setClicked(!clicked);
                    unlike();
                  
                  
                   }}/></i>
                 )
                 } */}

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