import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../redux/Slices/UserSlice'
import NavbarDash from './Navbar/NavbarDash'
import Profil_User from './Profile_User/Profil_User'
import Sidebar from './Sidebar/Sidebar'


const Dashboard = () => {
  const Users = useSelector((state) => state.user?.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])
  
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <NavbarDash/>
        <div>
{Users?.map((user, i) => {
  <Profil_User user={user} key={i} />
})}
        </div>
    
      </div>
    </div>
  )
}

export default Dashboard