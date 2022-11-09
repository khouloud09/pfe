import React from 'react'
import NavbarDash from './Navbar/NavbarDash'
import Sidebar from './Sidebar/Sidebar'


const Dashboard = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <NavbarDash/>
    
      </div>
    </div>
  )
}

export default Dashboard