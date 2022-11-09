import ListUser from "../../components/Dashboard/ListUser";
import NavbarDash from "../../components/Dashboard/Navbar/NavbarDash";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import "./List.css";


const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <NavbarDash/>
        <ListUser/>
      </div>
    </div>
  )
}

export default List