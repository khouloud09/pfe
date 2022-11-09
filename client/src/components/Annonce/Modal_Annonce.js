import React, { useState } from 'react'
import './Modal_Annonce.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addAnnonce } from '../../redux/Slices/AnnonceSlice'
import AddMap from './AddMap'
import AddGalerie from './AddGalerie'
const Modal_Annonce = () => {
    const user=useSelector((state)=>state.user?.user)

    const dispatch =useDispatch();
   
    const [annonce, setAnnonce] = useState({ 
        // localisationMap:{lat:'30',lng:'10'},
        user_id:user?._id,
        user_name:user?.name,
        galerie: [],
        options: [],
    })
    const [checked, setChecked] = useState([]);

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
        setAnnonce({...annonce, options: updatedList })
      };


    return (
        <div className='annonce '>
            <div className='container'>
                <div className='shadow'>
                    <h4>Déposer une petite annonce</h4> <br />
                    <div />
                    <div className="row">

                        <label>Votre offre <span className="error">*</span></label>
                        <div className="form-group ">
                            <div className='toggle-input active' >
                                <input type="radio" id="typ1" name="check" value="A vendre"
                                    onChange={(e) => setAnnonce({ ...annonce, typeAnnonce: e.target.value })} />
                                <label for="typ1">  A Vendre  </label>
                            </div >
                            <div className='toggle-input btn-default'>
                                <input type="radio" id="typ2" name="check" value="A Louer"
                                    onChange={(e) => setAnnonce({ ...annonce, typeAnnonce: e.target.value })} />
                                <label for="typ2" >  A Louer  </label>
                            </div>
                        </div>
                        <div >

                            <span><i> <FontAwesomeIcon icon={faInfoCircle} /></i> Cocher votre offre "A vendre ou "A louer".  </span>

                        </div>
                    </div>
                    <div className="row">
                        <label>Catégorie <span className="error">*</span></label>
                    
                            <input list="categorie"  id="options" required
                                onChange={(e) => setAnnonce({ ...annonce, categorie: e.target.value })}
                            />
                            <datalist id="categorie" >
                                <option >Choisissez la catégorie</option>
                                <option>Appartement</option>
                                <option >Maison</option>
                                <option >Terrain</option>
                                <option >Local commercial</option>
                                <option >Bureau</option>
                                <option >Place de parc</option>
                                <option >Autres</option>
                            </datalist>
                            <small >Veuillez choisir une catégorie.</small>
                        

                        <div >

                            <span><i>  <FontAwesomeIcon icon={faInfoCircle} /></i> Séléctionner une catégorie de votre bien à déposer. </span>

                        </div>

                    </div>
                    <div className="row">
                        <label >Titre de votre annonce <span className="error">*</span></label>
                        
                            <input required type="text" placeholder="Titre de votre annonce"
                                onChange={(e) => setAnnonce({ ...annonce, titre: e.target.value })} />
                            <small className="help-block">Veuillez renseigner ce champ.</small>
                            
                        
                            <span><i > <FontAwesomeIcon icon={faInfoCircle} /></i> Le Titre ne dépasse pas 100 caractères .</span>

                        </div>
                   
                    <div class="row">


                        <label >Description <span className="error">*</span></label>
                       
                            <textarea required="" cols="60" rows="10" placeholder="Votre annonce"
                                onChange={(e) => setAnnonce({ ...annonce, description: e.target.value })} ></textarea>
                            <small>Veuillez renseigner ce champ.</small>

                        <div >

                            <span><i><FontAwesomeIcon icon={faInfoCircle} /> </i> Décrivez tous les avantages de votre bien d'une manière complète .  </span>
                            <br />
                            <span><i><FontAwesomeIcon icon={faInfoCircle} /> </i> Veuillez ne pas insérer dans la description d'adresse email ni liens de site internet.  </span>
                        </div>
                    </div>
                    <div class="row">
                        <label>Prix /DT<span className="error">*</span></label>
                     
                            

                                <input type="text" placeholder="Prix" required
                                    onChange={(e) => setAnnonce({ ...annonce, prix: e.target.value })} />
                           
                            <small class="help-block" >Seulement des chiffres</small>
                        <div >
                            <span><i><FontAwesomeIcon icon={faInfoCircle} /> </i> Le prix est optionnel. S'il n'est pas mentionné, il sera remplacé par un lien de contact.
                            </span>
                        </div>
                    </div>
                    <div className="row " >
                        <label>Durée <span className="error">*</span></label>
                      

                            <input list="duree" className="form-group "
                                onChange={(e) => setAnnonce({ ...annonce, duree: e.target.value })}
                            />
                            <datalist id="duree" class="form-group " name="4" placeholder="Durée" >
                                <option >Choisissez la durée</option>
                                <option >Par semaine</option>
                                <option >Par mois</option>
                                <option>Par nuit</option>
                            </datalist>





                      

                        <div>
                            <span><i><FontAwesomeIcon icon={faInfoCircle} /> </i> Duré de votre location</span>
                        </div>
                    </div>
                    <div className="row">
                   <label>Photos <span className="error">*</span> </label>
                 <AddGalerie setAnnonce={setAnnonce} annonce={annonce}/>
                  <div >

<span><i><FontAwesomeIcon icon={faInfoCircle} /> </i>Vous pouvez télécharger 4 photo(s) GRATUITEMENT<br />
    En fonction de la taille de votre image, le téléchargement peut prendre plusieurs minutes.</span>
</div>
                    </div>
                
                <div className="row ">
                <AddMap setAnnonce={setAnnonce} annonce={annonce}/>
                </div>
                <div className="row ">
                    <label >Délégation <span className="error">*</span></label>
                    <input required=""
                        list="delegation"
                        className="select_form form-control"
                        onChange={(e) => setAnnonce({ ...annonce, delegation: e.target.value })}
                    />
                    <datalist id="delegation">
                        <option >Choisissez la delegation</option>
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
                    </datalist>
                    <small className="help-block" >Veuillez choisir une delegation.</small>
                </div>
                {/* <div className="row">
                    <label >Adresse de votre annonce <span className="error">*</span></label>
                    <div >

                        <input type="text" placeholder="Adresse de votre annonce"
                            onChange={(e) => setAnnonce({ ...annonce, localisationMap: e.target.value })}
                        />

                    </div>
                    <div >
                        <span><i><FontAwesomeIcon icon={faInfoCircle} /> </i> L'adresse complète du bien. </span>

                    </div>

                </div>
                */}
                <div id="input-group" className="row">
                <label>Surface habitable (m²) <span className="error">*</span></label>
                    <input type="number" placeholder="Surf habitable"
                        onChange={(e) => setAnnonce({ ...annonce, surfaceHabitable: e.target.value })} />
                         <label>Surface terrain (m²) <span className="error">*</span></label>
                    <input type="number" placeholder="Surf terrain"
                        onChange={(e) => setAnnonce({ ...annonce, surfaceTerrain: e.target.value })} />
                         <label>Année construction <span className="error">*</span></label>
                    <input type="text" placeholder="Année construction"
                        onChange={(e) => setAnnonce({ ...annonce, dateConstruction: e.target.value })} />
                </div>
                <div className="row ">
                    
                    <label>Nb.salle de bain <span className="error">*</span></label>
                        <input list="salle de bain" placeholder="Salle de bain"
                            onChange={(e) => setAnnonce({ ...annonce, nbrSalleDeBain: e.target.value })}
                        />
                        <datalist id="salle de bain">
                            <option >Salle de bain</option>
                            <option >1</option>
                            <option>2</option>
                            <option >3</option>
                            <option >4</option>
                            <option >5</option>
                            <option >6</option>
                        </datalist>
                    
                    
                    <label>Nb.chambres <span className="error">*</span></label>
                        <input list="chambres" placeholder="Chambres"
                            onChange={(e) => setAnnonce({ ...annonce, nbrChambre: e.target.value })}
                        />
                        <datalist id="chambres" >
                            <option >Chambres</option>
                            <option >1</option>
                            <option >2</option>
                            <option >3</option>
                            <option >4</option>
                        </datalist>
                  
                   
                    <label>Piéces (Totale) <span className="error">*</span></label>
                        <input list="Piéces" placeholder="Piéces (Totale)"
                            onChange={(e) => setAnnonce({ ...annonce, nbrPiece: e.target.value })}
                        />

                        <datalist id="Piéces" >
                            <option >Piéces (Totale)</option>
                            <option >1</option>
                            <option >2</option>
                            <option >3</option>
                            <option >4</option>
                            <option >5</option>
                            <option >6</option>
                            <option >7</option>
                        </datalist>
                    
                </div>




                <div className="block-checkbox">
                    <div className="checkbox  ">
                        <input type="checkbox" id="Vue mer" name="form" value="Vue mer" 
                        onChange={handleCheck}/>
                        <label for="Vue mer">Vue mer</label>
                    </div>
                    <div className="checkbox  ">
                        <input type="checkbox" id="Meublé" name="form" value="Meublé"
                       onChange={handleCheck}/>
                        <label for="Meublé">Meublé</label>
                    </div>
                    <div className="checkbox  ">
                        <input type="checkbox" id="Piscine" name="form" value="Piscine"
                       onChange={handleCheck}/>
                        <label for="Piscine">Piscine</label>
                    </div>
                    <div className="checkbox  ">
                        <input type="checkbox" id="Garage" name="form" value="Garage" 
                       onChange={handleCheck}/>
                        <label for="Garage">Garage</label>
                    </div>
                    <div className="checkbox  ">
                        <input type="checkbox" id="Jardin" name="form" value="Jardin"
                       onChange={handleCheck}/>
                        <label for="Jardin">Jardin</label>
                    </div>
                    <div className="checkbox  ">
                        <input type="checkbox" id="Place de parc" name="form" value="Place de parc" 
                       onChange={handleCheck}/>
                        <label for="Place de parc">Place de parc</label>
                    </div>
                    <div className="checkbox  ">
                        <input type="checkbox" id="Ascenseur" name="form" value="Ascenseur" 
                       onChange={handleCheck}/>
                        <label for="Ascenseur">Ascenseur</label>
                    </div>
                    <div className="checkbox  ">
                        <input type="checkbox" id="Terrasses" name="form" value="Terrasses"/>
                        <label for="Terrasses">Terrasses</label>
                    </div>
                    <div className="checkbox  ">
                        <input type="checkbox" class="styled" id="Cuisine équipé" name="form" value="Cuisine équipé"
                       onChange={handleCheck}/>
                        <label for="Cuisine équipé">Cuisine équipé</label>
                    </div>
                    <div className="checkbox  ">
                        <input type="checkbox" id="Cheminée" name="form" value="Cheminée"
                       onChange={handleCheck}/>
                        <label for="Cheminée">Cheminée</label>
                    </div>
                    <div className="checkbox  ">
                        <input type="checkbox" id="Climatisation" name="form" value="Climatisation" 
                       onChange={handleCheck}/>
                        <label for="Climatisation">Climatisation</label>
                    </div>
                    <div className="checkbox  ">
                        <input type="checkbox" id="Chauffage centrale" name="form" value="Chauffage centrale" 
                       onChange={handleCheck}/>
                        <label for="Chauffage centrale">Chauffage centrale</label>
                    </div>
                    <div className="checkbox  ">
                        <input type="checkbox" id="Chauffage électriques" name="form" value="Chauffage électriques"
                       onChange={handleCheck}/>
                        <label for="Chauffage électriques">Chauffage électriques</label>
                    </div>
                    <div className="checkbox  ">
                        <input type="checkbox" id="Accès internet" name="form" value="Accès internet" 
                       onChange={handleCheck}/>
                        <label for="Accès internet">Accès internet</label>
                    </div>
                    <div className="checkbox  ">
                        <input type="checkbox" id="Parabole / TV" name="form" value="Parabole / TV"
                       onChange={handleCheck}/>
                        <label for="Parabole / TV">Parabole / TV</label>
                    </div>
                    <div className="checkbox  ">
                        <input type="checkbox" id="Interphone" name="form" value="Interphone"
                       onChange={handleCheck}/>
                        <label for="Interphone">Interphone</label>
                    </div>
                    <div className="checkbox  ">
                        <input type="checkbox" id="Système Alarme" name="form" value="Système Alarme"
                       onChange={handleCheck}/>
                     
                        <label for="Système Alarme">Système Alarme</label>
                    </div>
                    <div className="checkbox  ">
                        <input type="checkbox" id="Accès handicapé" name="form" value="Accès handicapé" 
                       onChange={handleCheck}/>
                        <label for="Accès handicapé">Accès handicapé</label>
                    </div>
                </div>
                <div className="row ">
                    <button type="submit" className='btn1' 
                    onClick={() =>{dispatch(addAnnonce(annonce))}}>Envoyer
                    </button>
                </div>
                
            </div>
            
            </div>
        </div>




    )
}

export default Modal_Annonce
