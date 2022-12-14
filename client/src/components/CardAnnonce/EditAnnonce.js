import React, { useState } from 'react'
import "./CardAnnonce.css"
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateAnnonce } from '../../redux/Slices/AnnonceSlice'
import MapShow from './MapShow'
import UpdateGalerie from './UpdateGalerie'

const EditAnnonce = () => {
    const location = useLocation();
    const { annonce } = location.state
    const [newAnnonce, setNewAnnonce] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [ping, setPing] = useState(false);

    const [checked, setChecked] = useState([]);

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
        setNewAnnonce({ ...newAnnonce, options: updatedList })
    };


    const handleChange = (id) => {
        dispatch(updateAnnonce({ id, annonce: newAnnonce }));
        setPing(!ping);
    };
    return (<>
        <div className='annonce ' >
            <div className='container'>
                <div className='shadow'>
                    <h2>Modifier votre annonce</h2>
                    <div />
                    <div className="row">

                        <label>Votre offre <span className="error">*</span></label>
                        <div className="form-group ">
                            <div className='toggle-input active' >

                                <input type="radio" id="typ1" name="check" value="A vendre"
                                    onChange={(e) => setNewAnnonce({ ...newAnnonce, typeAnnonce: e.target.value })} defaultChecked={annonce?.typeAnnonce === "A vendre"} />
                                <label for="typ1">  A Vendre  </label>
                            </div >
                            <div className='toggle-input btn-default'>
                                <input type="radio" id="typ2" name="check" value="A Louer"
                                    onChange={(e) => setNewAnnonce({ ...newAnnonce, typeAnnonce: e.target.value })} defaultChecked={annonce?.typeAnnonce === "A Louer"} />
                                <label for="typ2" >  A Louer  </label>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <label>Cat??gorie <span className="error">*</span></label>

                        <input list="categorie" required
                            onChange={(e) => setNewAnnonce({ ...newAnnonce, categorie: e.target.value })}
                            defaultValue={annonce.categorie}
                        />
                        <datalist id="categorie">
                            <option >Choisissez la cat??gorie</option>
                            <option>Appartement</option>
                            <option >Maison</option>
                            <option >Terrain</option>
                            <option >Local commercial</option>
                            <option >Bureau</option>
                            <option >Place de parc</option>
                            <option >Autres</option>
                        </datalist>
                        <small >Veuillez choisir une cat??gorie.</small>

                    </div>
                    <div className="row ">
                        <label >Titre de votre annonce <span className="error">*</span></label>
                        <input onChange={(e) => setNewAnnonce({ ...newAnnonce, titre: e.target.value })} defaultValue={annonce?.titre} />
                    </div>
                    <div className="row ">
                        <label >Description <span className="error">*</span></label>
                        <input onChange={(e) => setNewAnnonce({ ...newAnnonce, description: e.target.value })} defaultValue={annonce?.description} />
                    </div>
                    <div className="row " >
                        <label>Dur??e <span className="error">*</span></label>
                        <input list="duree" className="form-group "
                            onChange={(e) => setNewAnnonce({ ...newAnnonce, duree: e.target.value })} defaultValue={annonce?.duree}
                        />
                        <datalist id="duree" name="4" placeholder="Dur??e" >
                            <option >Choisissez la dur??e</option>
                            <option >Par semaine</option>
                            <option >Par mois</option>
                            <option>Par nuit</option>
                        </datalist>
                    </div>
                    <div id="input-group" className="row">
                        <label>Surface habitable (m??) <span className="error">*</span></label>
                        <input type="number" placeholder="Surf habitable"
                            onChange={(e) => setNewAnnonce({ ...newAnnonce, surfaceHabitable: e.target.value })} defaultValue={annonce?.surfaceHabitable} />
                        <label>Surface terrain (m??) <span className="error">*</span></label>
                        <input type="number" placeholder="Surf terrain"

                            onChange={(e) => setNewAnnonce({ ...newAnnonce, surfaceTerrain: e.target.value })} defaultValue={annonce?.surfaceTerrain} />
                        <label>Ann??e construction <span className="error">*</span></label>
                        <input type="text" placeholder="Ann??e construction"
                            onChange={(e) => setNewAnnonce({ ...newAnnonce, dateConstruction: e.target.value })} defaultValue={annonce?.dateConstruction} />
                    </div>
                    <div id="input-group" className="row">

                        <label>Nb.salle de bain <span className="error">*</span></label>
                        <input list="salle de bain" placeholder="Salle de bain"
                            onChange={(e) => setNewAnnonce({ ...newAnnonce, nbrSalleDeBain: e.target.value })} defaultValue={annonce?.nbrSalleDeBain}
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
                            onChange={(e) => setNewAnnonce({ ...newAnnonce, nbrChambre: e.target.value })} defaultValue={annonce?.nbrChambre}
                        />
                        <datalist id="chambres" >
                            <option >Chambres</option>
                            <option >1</option>
                            <option >2</option>
                            <option >3</option>
                            <option >4</option>
                        </datalist>

                        <label>Pi??ces (Totale) <span className="error">*</span></label>
                        <input list="Pi??ces" placeholder="Pi??ces (Totale)"
                            onChange={(e) => setNewAnnonce({ ...newAnnonce, nbrPiece: e.target.value })} defaultValue={annonce?.nbrPiece}
                        />

                        <datalist id="Pi??ces" >
                            <option >Pi??ces (Totale)</option>
                            <option >1</option>
                            <option >2</option>
                            <option >3</option>
                            <option >4</option>
                            <option >5</option>
                            <option >6</option>
                            <option >7</option>
                        </datalist>

                    </div>



                    <div className="row ">
                        <label>Prix /DT<span className="error">*</span></label>
                        <input onChange={(e) => setNewAnnonce({ ...newAnnonce, prix: e.target.value })} type={'number'} defaultValue={annonce?.prix} />

                    </div>
                    <div className="row ">
                        <label >D??l??gation <span className="error">*</span></label>
                        <input required=""
                            list="delegation"
                            className="select_form form-control"
                            onChange={(e) => setNewAnnonce({ ...newAnnonce, delegation: e.target.value })}
                            defaultValue={annonce?.delegation}
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
                    <label>Options <span className="error">*</span></label>
                    <div className="block-checkbox" >
                        <div className="checkbox  ">
                            <input type="checkbox" id="Vue mer" name="form" value="Vue mer"
                                onChange={handleCheck} />
                            <label for="Vue mer">Vue mer</label>
                        </div>
                        <div className="checkbox  ">
                            <input type="checkbox" id="Meubl??" name="form" value="Meubl??"
                                onChange={handleCheck} />
                            <label for="Meubl??">Meubl??</label>
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
                            <input type="checkbox" class="styled" id="Cuisine ??quip??" name="form" value="Cuisine ??quip??"
                                onChange={handleCheck} />
                            <label for="Cuisine ??quip??">Cuisine ??quip??</label>
                        </div>
                        <div className="checkbox  ">
                            <input type="checkbox" id="Chemin??e" name="form" value="Chemin??e"
                                onChange={handleCheck} />
                            <label for="Chemin??e">Chemin??e</label>
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
                            <input type="checkbox" id="Chauffage ??lectriques" name="form" value="Chauffage ??lectriques"
                                onChange={handleCheck} />
                            <label for="Chauffage ??lectriques">Chauffage ??lectriques</label>
                        </div>
                        <div className="checkbox  ">
                            <input type="checkbox" id="Acc??s internet" name="form" value="Acc??s internet"
                                onChange={handleCheck} />
                            <label for="Acc??s internet">Acc??s internet</label>
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
                            <input type="checkbox" id="Syst??me Alarme" name="form" value="Syst??me Alarme"
                                onChange={handleCheck} />

                            <label for="Syst??me Alarme">Syst??me Alarme</label>
                        </div>
                        <div className="checkbox  ">
                            <input type="checkbox" id="Acc??s handicap??" name="form" value="Acc??s handicap??"
                                onChange={handleCheck} />
                            <label for="Acc??s handicap??">Acc??s handicap??</label>
                        </div>
                    </div>

                    <div className="row">
                        <label>Photos <span className="error">*</span> </label>
                        <UpdateGalerie setAnnonce={setNewAnnonce} annonce={newAnnonce} />
                    </div >


                    <div className='row'>
                        <label>Localisation <span className="error">*</span>
                            <MapShow position={annonce.localisationMap} />
                        </label>
                    </div>
                    <div className='row_Modal'  >
                        <button type="submit" className='btn_modal'
                            onClick={async() =>{
                                const response = await window.confirm('Are you sure you want update your annonce')
                                if (response){
                                    handleChange(annonce?._id);
                                    setTimeout(() => {
                                        alert('Votre annonce a ??t?? mis ?? jour')
                                        navigate('/')
                                    }, 1200);
                                }
                                }
                               }  
                               >
                            Modifier
                        </button>
                    </div>
                </div>
            </div>
        </div >
    </>
    )
}

export default EditAnnonce