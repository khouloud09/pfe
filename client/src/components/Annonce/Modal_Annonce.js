import React, { useState } from 'react'
import './Modal_Annonce.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addAnnonce } from '../../redux/Slices/AnnonceSlice'
import AddMap from './AddMap'
import AddGalerie from './AddGalerie'
import { useNavigate } from 'react-router-dom'
import AppartementField from './subModal/AppartementField'
import MaisonField from './subModal/MaisonField'
import TerrainField from './subModal/TerrainField'
import AutresField from './subModal/AutresField'
import LocalCommercialField from './subModal/LocalCommercialField'
import BureauField from './subModal/BureauField'
import PlaceParcField from './subModal/PlaceParcField'


const Modal_Annonce = ({ ping, setPing }) => {

    const [cat, setCat] = useState('Autres');
    const user = useSelector((state) => state.user?.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [annonce, setAnnonce] = useState({

        id_user: user?._id,
        user_name: user?.name,
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
        setAnnonce({ ...annonce, options: updatedList })
    };

    const switcher = (cat) => {
        switch (cat) {
            case 'Autres':
                return <AutresField annonce={annonce} setAnnonce={setAnnonce} handleCheck={handleCheck} />
            case 'Maison':
                return <MaisonField annonce={annonce} setAnnonce={setAnnonce} handleCheck={handleCheck} />
            case 'Appartement':
                return <AppartementField annonce={annonce} setAnnonce={setAnnonce} handleCheck={handleCheck} />
            case 'Terrain':
                return <TerrainField annonce={annonce} setAnnonce={setAnnonce} />
            case 'Local commercial':
                return <LocalCommercialField annonce={annonce} setAnnonce={setAnnonce} handleCheck={handleCheck} />
            case 'Bureau':
                return <BureauField annonce={annonce} setAnnonce={setAnnonce} handleCheck={handleCheck} />
            case 'Place de parc':
                return <PlaceParcField annonce={annonce} setAnnonce={setAnnonce} />
            default:
                break;
        }
    }

    return (
        <div className='annonce '>
            <div className='container'>
                <div className='shadow'>
                    <h3>Déposer une petite annonce</h3> <br />
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
                        <div className='info'>

                            <span><i> <FontAwesomeIcon icon={faInfoCircle} /></i> Cocher votre offre "A vendre ou "A louer".  </span>

                        </div>
                    </div>
                    <div className="row">
                        <label>Catégorie <span className="error">*</span></label>

                        <input list="categorie" id="options" required
                            onChange={(e) => { setAnnonce({ ...annonce, categorie: e.target.value }); setCat(e.target.value) }}
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


                        <div className='info'>

                            <span><i>  <FontAwesomeIcon icon={faInfoCircle} /></i> Séléctionner une catégorie de votre bien à déposer. </span>

                        </div>

                    </div>
                    <div className="row">
                        <label >Titre de votre annonce <span className="error">*</span></label>

                        <input required type="text" placeholder="Titre de votre annonce"
                            onChange={(e) => setAnnonce({ ...annonce, titre: e.target.value })} />
                        <small className="help-block">Veuillez renseigner ce champ.</small>

                        <div className='info'>
                            <span><i > <FontAwesomeIcon icon={faInfoCircle} /></i> Le Titre ne dépasse pas 100 caractères .</span>
                        </div>
                    </div>

                    <div class="row">


                        <label >Description <span className="error">*</span></label>

                        <textarea required="" cols="60" rows="10" placeholder="Votre annonce"
                            onChange={(e) => setAnnonce({ ...annonce, description: e.target.value })} ></textarea>
                        <small>Veuillez renseigner ce champ.</small>

                        <div className='info'>

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
                        <div className='info'>
                            <span><i><FontAwesomeIcon icon={faInfoCircle} /> </i> Le prix est optionnel. S'il n'est pas mentionné, il sera remplacé par un lien de contact.
                            </span>
                        </div>
                    </div>

                    <div className="row">
                        <label>Photos <span className="error">*</span> </label>
                        <AddGalerie setAnnonce={setAnnonce} annonce={annonce} ping={ping} setPing={setPing} />
                        <div className='info'>

                            <span><i><FontAwesomeIcon icon={faInfoCircle} /> </i>Vous pouvez télécharger 4 photo(s) GRATUITEMENT<br />
                                En fonction de la taille de votre image, le téléchargement peut prendre plusieurs minutes.</span>
                        </div>
                    </div>

                    <div className="row ">
                        <AddMap setAnnonce={setAnnonce} annonce={annonce} />
                    </div>
                    <div className="row ">
                        <label >Délégation <span className="error">*</span></label>
                        <input required=""
                            list="delegation"
                            className="select_form form-control"
                            onChange={(e) => setAnnonce({ ...annonce, delegation: e.target.value })}
                        />
                        <datalist id="delegation">
                            <option  >Choisissez la delegation</option>
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
                        <div className='info'>
                            <span  ><i><FontAwesomeIcon icon={faInfoCircle} /> </i>Veuillez choisir une delegation.</span>
                        </div>
                    </div>

                    {switcher(cat)}


                    <div className="row_Modal ">
                        <button type="submit" className='btn_modal'
                            onClick={async () => {
                                const response = await window.confirm("Votre demande a été envoyée avec succès.");

                                if (response) {
                                    dispatch(addAnnonce(annonce));
                                    setPing(!ping);
                                    setTimeout(() => {
                                        alert('votre demande est en cours de traitement')
                                        navigate('/')
                                    }, 1200);
                                }
                            }}>Envoyer
                        </button>
                    </div>

                </div>

            </div>
        </div>




    )
}

export default Modal_Annonce
