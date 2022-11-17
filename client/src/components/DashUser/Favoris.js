import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAnnonceById } from '../../redux/Slices/AnnonceSlice'
import CardAnnonce from '../CardAnnonce/CardAnnonce'
import UserNav from './UserNav'

const Favoris = ({favLength,setFavLength}) => {
    const favoris=useSelector(state=>state.user?.user?.likes)

    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => {
            favoris?.map(el=>dispatch(getAnnonceById({id:el})))
        }, 600);
         setFavLength(favoris?.length)
    }, [favoris]);
    const list=useSelector((state)=>state.annonce?.favoris)
  
  return (
    <>
      <div className="list">
      <UserNav/>
          <div className="nav_main ">
            <h2>Mes Favoris</h2>
            <div className='content grid3 mtop '>
        {list?.map((el,i)=><CardAnnonce annonce={el} key={i}/>)}
        </div>
        </div>
        </div>
    </>
  )
}

export default Favoris  