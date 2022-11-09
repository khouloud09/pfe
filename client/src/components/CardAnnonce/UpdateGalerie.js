import React, { useEffect, useState } from 'react'
import axios from "axios";
import "../Annonce/Modal_Annonce.css"





function UpdateGalerie({setAnnonce,annonce, ping, setPing}) {
  const [file, setfile] = useState({
    galerie:[],
  })

  const [upload, setupload] = useState([]);
 
  useEffect(() => {
    setfile({ ...file, annonces: annonce?.annonce });
  }, [annonce, ping]);

  const bar = document.getElementById("progress-bar");
  const progressDiv = document.getElementById("progress-div");

  // console.log(progressDiv)

  const handleDrop = async () => {
    progressDiv.style.display = "block";
    // Push all the axios request promise into a single array
    const uploaders = upload.map(async (file) => {
      // Initial FormData
      const formData = new FormData();
      formData.append("file", file);
      // formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", "pfe_files"); // Replace the preset name with your own
      formData.append("api_key", "839112328228532"); // Replace API key with your own Cloudinary key
      formData.append("timestamp", (Date.now() / 1000) | 0);

      const config = {
        onUploadProgress: function (progressEvent) {
          const percentCompleted = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          bar.setAttribute("value", percentCompleted);
          bar.previousElementSibling.textContent = `${percentCompleted}%`;
          if (percentCompleted === 100) {
            bar.previousElementSibling.textContent = `Upload complete!`;
          }
        },
      };
      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return await axios
        .post(
          "https://api.cloudinary.com/v1_1/df7dujirt/upload",
          formData,
          config,
          {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          }
        )
        .then((response) => {
          const data = response.data;
          const fileURL = { url: data.secure_url, id: data.asset_id }; // You should store this URL for future references in your app
          progressDiv.style.display = "none";
          setupload([]);
          return fileURL;
        });
    });

    // Once all the files are uploaded
    await axios.all(uploaders).then(async (result) => {
      console.log(result)
      setfile({ ...file, galerie: result });
      setAnnonce({ ...annonce, galerie: result });
      // dispatch(addAnnonce({ ...file, galerie: result }));
      setPing(!ping);
      // ... perform after upload is successful operation
    });
  };

  return (
    <div className="Image">
          <div className="addImage">
            <label for="input-upload">
              Ajouter une photo</label>
              <input
                className="input-upload"
                type="file"
                multiple
                name="image"
                accept="image/*"
                required
                onChange={(e) => {
                  setupload(Object.values(e.target.files));
                }}
              />
            
            </div>
            {upload[0] ? (
              <button  className="btn-upload"
onClick={() => handleDrop()}> upload
               
                </button>
            ) : null}
             <div id="progress-div" style={{ display: "none" }}>
            <label for="progress-bar">0%</label>
            <progress id="progress-bar" value="0" max="100"></progress>
          </div>

          {file?.galerie?.map((image,i)=><img alt="aya 7aja" key={i} src={image.url}/>)}
    </div>
  )
}

export default UpdateGalerie