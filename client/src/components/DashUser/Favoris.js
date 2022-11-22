import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAnnonceById } from '../../redux/Slices/AnnonceSlice'
import { likeAnnonce } from '../../redux/Slices/UserSlice'
import CardAnnonce from '../CardAnnonce/CardAnnonce'
import UserNav from './UserNav'

const Favoris = ({favLength,setFavLength}) => {
    const likes=useSelector(state=>state.user?.user?.likes)
    
    const dispatch = useDispatch()
    // useEffect(() => {
    //    dispatch(likeAnnonce({id_user:user._id, annonceId:annonce._id}))
    // //    setTimeout(() => {
    // //     likes?.map(el=>dispatch(getAnnonceById({id:el})))
    // // }, 600);
    // }, [dispatch]);
  
  return (
    <>
      <div className="list">
      <UserNav/>
          <div className="nav_main ">
            <h2>Mes Favoris</h2>
            <div className='content grid3 mtop '>
        {likes?.map((el,i)=><CardAnnonce annonce={el} key={i}/>)}
        </div>
        </div>
        </div>
    </>
  )
}

export default Favoris  