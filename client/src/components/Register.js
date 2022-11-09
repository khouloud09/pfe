import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { userRegister } from '../redux/Slices/UserSlice';

const Register = () => {
     const [ping, setPing] = useState(false);
    const [user, setuser] = useState({
        name:"",
        lastName:"",
        phone:Number,
        email:"",
        adress:"",
        password:"",
        isAdmin: false,
       });
   
    
       const dispatch =useDispatch();
  return (
    
        <div className="form signup" >        
                       <div className="row">
                               <div className="form-group  ">
                                  <select className="form-control  " >
                                    <option value="">Choisissez le type de votre compte</option>
                               <option value="1"> Particulier</option>
                               <option value="2">Professionel</option>
                            </select>
                       
                                 
 
                    <select  className="form-control hidden">
                                     <option value="M">M</option>
                                     <option value="Mme">Mme</option>
                                     <option value="Melle">Melle</option>
                     </select>
           
                   
              
                   
                    <div className="form-group-input">
                         <div className="input-group">
                                <span className="input-group-addon">
                                     <i className="fa fa-user"></i>
                                </span>
               		<input type="text" 
                     className="form-control " 
                     placeholder=" Prénom " 
                     name="name"
                     required=""
                     onChange={(e) => setuser({...user,name:e.target.value})}
                     />
                     <small className="help-block"  data-bv-for="name"  >Veuillez renseigner ce champ.</small></div>
                     <input type="text" 
                     className="form-control " 
                     placeholder=" Nom " 
                     name="lastName"
                     required=""
                     onChange={(e) => setuser({...user,lastName:e.target.value})}
                     />
                         </div>
                 
                    <small className="help-block"  data-bv-for="lastName"  >Veuillez renseigner ce champ.</small></div>
                  
                      
                   </div>
                    <div className="form-group "> 
                         <select required="" 
                          name="delegation" 
                          className="select_form form-control" >
                            <option value="10">Choisissez la delegation</option><option >Gabes Medina</option><option>Gabes Ouest</option><option >Gabes Sud</option><option >Ghannouch</option><option >ElHamma</option><option >Matmata</option><option >Mareth</option><option >Manzel El Habib</option><option >Metouia</option><option >Nouvelle Matmata</option>
                            </select> 
                            <small className="help-block" >Veuillez choisir une delegation.</small>
                            </div>       
                <div className="form-group ">       
                     <div className="input-group">
                                <span className="input-group-addon">
                                     <i className="fa fa-home"></i>
                                </span>
                       <input
                        type="text"
                        className="form-control "
                        name="adress"
                        placeholder="Votre adresse" 
                        onChange={(e) => setuser({...user,adress:e.target.value})}
                        />
                     </div>
                     </div>
                    
                 <div className="form-group ">     
                    
                         
                                
                              
                     <div className="tel-input ">
                        <div >+216</div>
                        <input 
                        type="phone" 
                        className=" intel_tel"
                         placeholder="Votre numéro de téléphone"
                         name="phone"
                         onChange={(e) => setuser({...user,phone:e.target.value})}
                         />
                        </div>
                     
                 <div class="checkbox  checkbox-success   ">
                         <input type="checkbox"
                          className="styled" 
                          name="tel_on_off"
                           value="Y"
                           />
                     <label for="tel_on_off">Cacher votre numéro dans l'annonce</label>

                                        </div>
                <small className="help-block" >Format de numéro invalide</small></div>
                     
                 <div className="form-group"> 
                     <div className="input-group">
                              
                     <input
                      type="email"
                       className="form-control "
                       placeholder="Votre email"
                       name="email"
                       onChange={(e) => setuser({...user,email:e.target.value})}
                       />
                
                     </div>
                     <small class="help-block"  >L'adresse email n'est pas valide</small></div>
                  
                        
                   
                            <div className="row">
                                
                 <div className="form-group"> 
                      <div className="input-group">
                                <span class="input-group-addon">
                                    <i class="fa fa-lock"></i>
                                </span>
                     <input type="password" 
                      className="form-control "
                       placeholder="Mot de passe" 
                       name="password"
                       onChange={(e) => setuser({...user,password:e.target.value})}
                       />
                      </div>
                 <small className="help-block" >Veuillez renseigner ce champ</small>
                 <small class="help-block"  >Utilisez au moins 4 caractères.</small></div>
                <div className="form-group">
                    
                      <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-lock"></i>
                                </span>
                    <input type="password"  
                    className="form-control " 
                     placeholder="Confirmation du mot de passe" 
                     />
                      </div>
                      <small className="help-block"  >Veuillez renseigner ce champ</small>
                      <small className="help-block"  >Les mots de passe ne correspondent pas. Voulez-vous réessayer ?</small>
                      </div>
                            
                    </div>
                                     
                            <input type="submit"
                              className="validation" 
                              value="S'inscrire "
                              onClick={() =>{
                                   dispatch(userRegister(user))
                                   setPing(!ping);
                              }}
                            /> 

          
              
                       
         
                   
              
               
               
                   
                   
                   
                   
                   
                   
                   
                   
                   
                  </div> 
                   
              
   
  )
}

export default Register