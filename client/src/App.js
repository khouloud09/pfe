
import './App.css';
import {Routes,Route } from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import { useDispatch } from 'react-redux';
import {  getUser,  userCurrent } from './redux/Slices/UserSlice';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Annonce from './components/Annonce/Modal_Annonce';
import Home from './components/Home/Home';
import { allAnnonces } from './redux/Slices/AnnonceSlice';
import AnnonceDetails from './components/CardAnnonce/AnnonceDetails';
import Dashboard from './components/Dashboard/Dashboard';
import New from './components/Dashboard/newUser/New';
import List from './Pages/List/List';
import UsersAnnonce from './components/Dashboard/UsersAnnonce/UsersAnnonce';
import PrivateRoute from "./routes/PrivateRoute";
import EditAnnonce from './components/CardAnnonce/EditAnnonce';


function App() {
  const isAuth = localStorage.getItem('token');
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth){
        dispatch(userCurrent());
      }

    dispatch(getUser());
    dispatch(allAnnonces());

    
  }
  
    , [])
   
  return (
    <div className="App">
      <Navbar/>
 <Routes>
      <Route path="/" element={<Home/>}></Route> 
      <Route path="/register" element={<Register/>}></Route> 
      <Route path="/login" element={<Login/>}></Route>  
      <Route path="/annonce" element={<Annonce/>}></Route>  
      <Route path="/details/:titre" element={<AnnonceDetails/>} />
      <Route element={<PrivateRoute />}>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Route>
      <Route path='/annonces' element={<UsersAnnonce/>}></Route>
      <Route path='/users' element={<List/>}></Route>
      <Route path='/users/new' element={<New/>}></Route>
     
      <Route path="/annonces/edit" element={<EditAnnonce/>}></Route>
      "/annonces/edit"
         </Routes>
   
 </div>
  );
}

export default App;
