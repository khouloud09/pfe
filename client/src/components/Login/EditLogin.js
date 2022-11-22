import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, updateUser, updateUserPassword, userRegister } from '../../redux/Slices/UserSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouseUser, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'


const EditLogin = () => {
    const user = useSelector((state) => state.user?.user);
    const [newUser, setNewUser] = useState({})

    const [ping, setPing] = useState(false);

    const handleUpdate = (id) => {
        dispatch(updateUser({ id, update: newUser }));
        setPing(!ping);
    };
    const [password, setpassword] = useState({ password: user.password });
    const handleChangePass = (id) => {
        dispatch(updateUserPassword({ id, password }));
    };

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
                <input
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    defaultValue={user.name}
                />
            </div>
            <div className="signup-group  ">
                <span >
                    <i><FontAwesomeIcon icon={faUser} /></i>
                </span>
                <input
                    onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
                    defaultValue={user.lastName}
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
                    onChange={(e) => setNewUser({ ...newUser, adress: e.target.value })}
                    defaultValue={user.adress}
                />
            </div>

            <div className="signup-group  ">



                <span >
                    <i><FontAwesomeIcon icon={faPhone} /></i>
                </span>


                <input
                    onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                    defaultValue={user.phone}
                />
            </div>

            <div className="signup-group  ">

                <span >
                    <i><FontAwesomeIcon icon={faEnvelope} /></i>
                </span>
                <input
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    defaultValue={user.email}

                />

            </div>


            <div className="signup-group  ">




                <span >
                    <i><FontAwesomeIcon icon={faLock} /></i>
                </span>
                <input onChange={(e) => setpassword({ ...password, password: e.target.value })}
                    defaultValue={user.password}
                />
            </div>

            <div className="signup-group  ">
                <span >
                    <i><FontAwesomeIcon icon={faLock} /></i>
                </span>
                <input onChange={(e) => setpassword({ ...password, password: e.target.value })}
                />

            </div>

            <div className="signup-group  ">

                <input type="submit"
                    className="validation"
                    value=" Update "
                    onClick={() => {
                        handleUpdate(user?._id);
                        handleChangePass(user?._id);
                        setPing(!ping);
                        setTimeout(() => {
                            dispatch(logout());
                            window.location = "/login"
                        }, 1200);
                    }}
                />

            </div >


        </div>
    )
}

export default EditLogin