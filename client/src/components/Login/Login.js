import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { userLogin } from '../../redux/Slices/UserSlice';
import "./Login.css"

const Login = () => {
    const isAuth = localStorage.getItem("token");
    const navigate = useNavigate()
    const  [login, setlogin] = useState({
        email: "",
        password: "",
         })
         const dispatch =useDispatch();
  return (
    <div>
       {isAuth?
    navigate("/"):null}
          <div className='form_signup shadow'>
    <div className='container-form'>
    <div className="signup">
      <label>Email ou Téléphone</label>
      </div>
      <div className="signup-group">
      <input  
       type="text"
        required=""
          placeholder="Email ou Téléphone"
          onChange={(e)=>setlogin({...login,email:e.target.value})}
          />
      <small className="help-block" >Veuillez renseigner ce champ.</small>
      </div>
      <div className="signup">
      <label>Mot de passe</label>
      </div>
      <div className="signup-group">
      <input type="password"
       required="" 
        name="password" 
         placeholder="Mot de passe"
         onChange={(e)=>setlogin({...login, password:e.target.value})}
         />
      <small className="help-block" >Veuillez renseigner ce champ.</small>
      </div>
      <div className="signup-group">
      <input 
      type="submit"
      className="validation"
       value="  Se connecter"
       onClick={()=>{dispatch(userLogin(login));
        setTimeout(() => {
          window.location.reload()
        }, 1000);}}
       /> 
       </div>
      <p className="link">Don't have an account?<br />
                    <Link to="/register"><span> Sign Up </span> </Link> here </p>



     
    </div>
   
  </div>
       </div>
  
  )
}

export default Login