import React, {  useState } from 'react'
import { useDispatch } from 'react-redux';
import { userRegister } from '../../redux/Slices/UserSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouseUser, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'

import "./Register.css"
import { addListFavoris } from '../../redux/Slices/ListFavoris';
const Register = () => {
     const [ping, setPing] = useState(false);
     const [user, setuser] = useState({
          name: "",
          lastName: "",
          phone: Number,
          email: "",
          adress: "",
          password: "",
          isAdmin: false,
     });
 


     const dispatch = useDispatch();
     return (

          <div className="form_signup shadow" >

               <div className="signup-group  ">

                    <select  >
                         <option value="">Choisissez le type de votre compte</option>
                         <option value="1"> Particulier</option>
                         <option value="2">Professionel</option>
                    </select>

               </div>

               <div className="signup-group  ">

                    <span >
                         <i><FontAwesomeIcon icon={faUser} /></i>
                    </span>
                    <input type="text"
                         className="form-control "
                         placeholder=" Prénom "
                         name="name"
                         required=""
                         onChange={(e) => setuser({ ...user, name: e.target.value })}
                    />
               </div>
               <div className="signup-group  ">
                    <span >
                         <i><FontAwesomeIcon icon={faUser} /></i>
                    </span>
                    <input type="text"
                         className="form-control "
                         placeholder=" Nom "
                         name="lastName"
                         required=""
                         onChange={(e) => setuser({ ...user, lastName: e.target.value })}
                    />
               </div>



               <div className="signup-group  ">
                    <select  >
                         <option value="10">Choisissez la delegation</option>
                         <option >Gabes Medina</option>
                         <option>Gabes Ouest</option>
                         <option >Gabes Sud</option>
                         <option >Ghannouch</option>
                         <option >ElHamma</option>
                         <option >Matmata</option>
                         <option >Mareth</option>
                         <option >Manzel El Habib</option>
                         <option >Metouia</option>
                         <option >Nouvelle Matmata</option>
                    </select>

               </div>
               <div className="signup-group  ">

                    <span >
                         <i><FontAwesomeIcon icon={faHouseUser} /></i>
                    </span>
                    <input
                         type="text"
                         className="form-control "
                         name="adress"
                         placeholder="Votre adresse"
                         onChange={(e) => setuser({ ...user, adress: e.target.value })}
                    />
               </div>

               <div className="signup-group  ">



                    <span >
                         <i><FontAwesomeIcon icon={faPhone} /></i>
                    </span>


                    <input
                         type="phone"
                         placeholder="Votre numéro de téléphone"
                         name="phone"
                         onChange={(e) => setuser({ ...user, phone: e.target.value })}
                    />
               </div>

               <div className="signup-group  ">

                    <span >
                         <i><FontAwesomeIcon icon={faEnvelope} /></i>
                    </span>
                    <input
                         type="email"
                         placeholder="Votre email"
                         name="email"
                         onChange={(e) => setuser({ ...user, email: e.target.value })}
                    />

               </div>


               <div className="signup-group  ">

                   


                         <span >
                              <i><FontAwesomeIcon icon={faLock} /></i>
                         </span>
                         <input type="password"
                              placeholder="Mot de passe"
                              name="password"
                              onChange={(e) => setuser({ ...user, password: e.target.value })}
                         />
                    </div>

                    <div className="signup-group  ">
                         <span >
                              <i><FontAwesomeIcon icon={faLock} /></i>
                         </span>
                         <input type="password"
                              placeholder="Confirmation du mot de passe"
                         />
                    
               </div>

               <div className="signup-group  ">

                    <input type="submit"
                         className="validation"
                         value="S'inscrire "
                         onClick={() => {
                              dispatch(userRegister(user));
                              // dispatch(addListFavoris({id_user:user?._id,list_Annonce:[] }))
                              setPing(!ping);
                               setTimeout(() => {
                                   window.location = "/login"
                                  }, 2200);
                         }}
                    />


















               </div >


          </div>
     )
}

export default Register