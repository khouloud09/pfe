import React from 'react'

const PlaceParcField = ({annonce,setAnnonce}) => {
  return (
    <>      
    <div id="input-group" className="row">
        <label>Surface terrain (m²) <span className="error">*</span></label>
        <input type="number" placeholder="Surf terrain"
            onChange={(e) => setAnnonce({ ...annonce, surfaceTerrain: e.target.value })} />
    </div>
</>
  )
}

export default PlaceParcField