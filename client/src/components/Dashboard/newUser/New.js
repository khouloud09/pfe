


import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import NavbarDash from "../Navbar/NavbarDash";
import  { userRegister } from "../../../redux/Slices/UserSlice";
import { useDispatch, useSelector } from "react-redux";

const New = () => {
    const Users = useSelector((state)=>state.user?.users);
  const [file, setFile] = useState("");
   const dispatch = useDispatch();

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <NavbarDash />
        <div className="top">
          <h1></h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
               <img src="./images/cloud_upload.png" alt=""/>
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {Users?.map((user,i) => (
                <div className="formInput" key={i}>
                  <label>{user.label}</label>
                  <input type={user.type} placeholder={user.placeholder} />
                </div>
              ))}
              <button
            >Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;