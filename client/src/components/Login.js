import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { userLogin } from '../redux/Slices/UserSlice';

const Login = () => {
    const isAuth = localStorage.getItem("token");
    const  [login, setlogin] = useState({
        email: "",
        password: "",
         })
         const dispatch =useDispatch();
  return (
    <div>
          <div className='login'>
    <div className='container'>
    <div className="form-group">
      <label>Email ou Téléphone</label>
      <input  
       type="text"
        required=""
          className="form-control" 
          placeholder="exemple : jean.dupont@domaine.com ou 22123456"
          onChange={(e)=>setlogin({...login,email:e.target.value})}
          />
      <small className="help-block" >Veuillez renseigner ce champ.</small>
      </div>
      <div className="form-group">
      <label>Mot de passe</label>

      <input type="password"
       required="" id="password"
        name="password" 
        className="form-control"
         placeholder="Mot de passe"
         onChange={(e)=>setlogin({...login, password:e.target.value})}
         />
      <small className="help-block" >Veuillez renseigner ce champ.</small>
      <a  className="pull-right"> Mot de passe oublié ? </a>
      </div>
      <input 
      type="submit"
       className="btn" 
       value="  Se connecter"
       onClick={()=>{dispatch(userLogin(login))}}
       /> 
      <p className="link">Don't have an account?<br />
                    <Link to="/register"><span>Sign Up </span> </Link>here</p>



     
    </div>
  </div>
       </div>
  
  )
}

export default Login