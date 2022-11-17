import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const AppartementField = ({annonce,setAnnonce,handleCheck}) => {
  return (
    <> <div className="row " >
                        <label>Durée <span className="error">*</span></label>
    
    
                        <input list="duree" 
                            onChange={(e) => setAnnonce({ ...annonce, duree: e.target.value })}
                        />
                        <datalist id="duree"  name="4" placeholder="Durée" >
                            <option >Choisissez la durée</option>
                            <option >Par semaine</option>
                            <option >Par mois</option>
                            <option>Par nuit</option>
                        </datalist>
    
    
                        <div>
                            <span><i><FontAwesomeIcon icon={faInfoCircle} /> </i> Duré de votre location</span>
                        </div>
                    </div>
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
                               <div className="block-checkbox">
                                   <div className="checkbox  ">
                                       <input type="checkbox" id="Vue mer" name="form" value="Vue mer"
                                           onChange={handleCheck} />
                                       <label for="Vue mer">Vue mer</label>
                                   </div>
                                   <div className="checkbox  ">
                                       <input type="checkbox" id="Meublé" name="form" value="Meublé"
                                           onChange={handleCheck} />
                                       <label for="Meublé">Meublé</label>
                                   </div>
                                   <div className="checkbox  ">
                                       <input type="checkbox" id="Piscine" name="form" value="Piscine"
                                           onChange={handleCheck} />
                                       <label for="Piscine">Piscine</label>
                                   </div>
                                   <div className="checkbox  ">
                                       <input type="checkbox" id="Garage" name="form" value="Garage"
                                           onChange={handleCheck} />
                                       <label for="Garage">Garage</label>
                                   </div>
                                   <div className="checkbox  ">
                                       <input type="checkbox" id="Jardin" name="form" value="Jardin"
                                           onChange={handleCheck} />
                                       <label for="Jardin">Jardin</label>
                                   </div>
                                   <div className="checkbox  ">
                                       <input type="checkbox" id="Place de parc" name="form" value="Place de parc"
                                           onChange={handleCheck} />
                                       <label for="Place de parc">Place de parc</label>
                                   </div>
                                   <div className="checkbox  ">
                                       <input type="checkbox" id="Ascenseur" name="form" value="Ascenseur"
                                           onChange={handleCheck} />
                                       <label for="Ascenseur">Ascenseur</label>
                                   </div>
                                   <div className="checkbox  ">
                                       <input type="checkbox" id="Terrasses" name="form" value="Terrasses" />
                                       <label for="Terrasses">Terrasses</label>
                                   </div>
                                   <div className="checkbox  ">
                                       <input type="checkbox" class="styled" id="Cuisine équipé" name="form" value="Cuisine équipé"
                                           onChange={handleCheck} />
                                       <label for="Cuisine équipé">Cuisine équipé</label>
                                   </div>
                                   <div className="checkbox  ">
                                       <input type="checkbox" id="Cheminée" name="form" value="Cheminée"
                                           onChange={handleCheck} />
                                       <label for="Cheminée">Cheminée</label>
                                   </div>
                                   <div className="checkbox  ">
                                       <input type="checkbox" id="Climatisation" name="form" value="Climatisation"
                                           onChange={handleCheck} />
                                       <label for="Climatisation">Climatisation</label>
                                   </div>
                                   <div className="checkbox  ">
                                       <input type="checkbox" id="Chauffage centrale" name="form" value="Chauffage centrale"
                                           onChange={handleCheck} />
                                       <label for="Chauffage centrale">Chauffage centrale</label>
                                   </div>
                                   <div className="checkbox  ">
                                       <input type="checkbox" id="Chauffage électriques" name="form" value="Chauffage électriques"
                                           onChange={handleCheck} />
                                       <label for="Chauffage électriques">Chauffage électriques</label>
                                   </div>
                                   <div className="checkbox  ">
                                       <input type="checkbox" id="Accès internet" name="form" value="Accès internet"
                                           onChange={handleCheck} />
                                       <label for="Accès internet">Accès internet</label>
                                   </div>
                                   <div className="checkbox  ">
                                       <input type="checkbox" id="Parabole / TV" name="form" value="Parabole / TV"
                                           onChange={handleCheck} />
                                       <label for="Parabole / TV">Parabole / TV</label>
                                   </div>
                                   <div className="checkbox  ">
                                       <input type="checkbox" id="Interphone" name="form" value="Interphone"
                                           onChange={handleCheck} />
                                       <label for="Interphone">Interphone</label>
                                   </div>
                                   <div className="checkbox  ">
                                       <input type="checkbox" id="Système Alarme" name="form" value="Système Alarme"
                                           onChange={handleCheck} />
           
                                       <label for="Système Alarme">Système Alarme</label>
                                   </div>
                                   <div className="checkbox  ">
                                       <input type="checkbox" id="Accès handicapé" name="form" value="Accès handicapé"
                                           onChange={handleCheck} />
                                       <label for="Accès handicapé">Accès handicapé</label>
                                   </div>
                               </div>
                           </>
  )
}

export default AppartementField