
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login'
import Register from './components/register/Register'
import { useDispatch, useSelector } from 'react-redux';
import { getUser, userCurrent } from './redux/Slices/UserSlice';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Annonce from './components/Annonce/Modal_Annonce';
import Home from './components/Home/Home';
import { allAnnonces, getAnnonceById } from './redux/Slices/AnnonceSlice';
import AnnonceDetails from './components/CardAnnonce/AnnonceDetails';
import Dashboard from './components/Dashboard/Dashboard';
import List from './Pages/List/List';
import UsersAnnonce from './components/Dashboard/UsersAnnonce/UsersAnnonce';
import PrivateRoute from "./routes/PrivateRoute";
import EditAnnonce from './components/CardAnnonce/EditAnnonce';
import Profil_User from './components/Dashboard/Profile_User/Profil_User';
import Favoris from './components/DashUser/Favoris';
import DashUser from './components/DashUser/DashUser';
import DashAnn from './components/DashUser/DashAnn';
import Achat from './Pages/Achat/Achat';
import Location from './Pages/Location/Location';
import DashProfil from './components/DashUser/DashProfil';
import EditLogin from './components/Login/EditLogin';
import Contact from './Pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './Pages/About/About';


function App() {
  const isAuth = localStorage.getItem('token');
  const [favLength, setFavLength] = useState(null)
  const dispatch = useDispatch();
  const [ping, setPing] = useState(false);
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }

    dispatch(getUser());
    dispatch(allAnnonces());

  }

    , [dispatch, ping])


  const fav = useSelector(state => state.user?.user?.listFavoris)
 
  useEffect(() => {
    setTimeout(() => {
      setFavLength(fav?.length)
    }, 3000);
  }, []);

  return (
    <div className="App">
      <Navbar favLength={favLength} />
      <div id="hero">
        <Routes>
          <Route path="/" element={<Home />}></Route>


          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* <Route path="/annonce" element={<Annonce />}></Route> */}
          <Route path="/details/:titre" element={<AnnonceDetails />} />

          <Route element={<PrivateRoute />}>
            <Route path="/annonce" element={<Annonce ping={ping} setPing={setPing} />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/DashUser" element={<DashUser />}></Route>
            <Route path="/DashUser/favoris" element={<Favoris favLength={favLength} setFavLength={setFavLength} />} />
            <Route path="/DashUser/mesAnnonces" element={<DashAnn />} />
            <Route path="/DashUser/profil" element={<DashProfil />} />
            <Route path="/DashUser/editProfil" element={<EditLogin />} />
            <Route path='/annonces' element={<UsersAnnonce />}></Route>
            <Route path='/users' element={<List />}></Route>
            <Route path='/users/view' element={<Profil_User />}></Route>

            <Route path="/annonces/edit" element={<EditAnnonce />}></Route>
          </Route>
          {/* <Route path='/dashboard/new' element={<New/>}></Route> */}

          <Route path="/achat" element={<Achat />}></Route>
          <Route path="/location" element={<Location />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>


        </Routes>
      </div>
    </div>
  );
}

export default App;
