
import React from 'react'
import { Map, TileLayer, Marker, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'



delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
const MapShow = ({ position }) => {





    return (
        <div >
            <Map center={[position.lat, position.lng]} zoom={14} ZoomControl={false} style={{width:"700px",marginBottom:"10px"}}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <ZoomControl position={"bottomright"}>

                </ZoomControl>
                <Marker position={position}>
                </Marker>
            </Map>

        </div>
    )
}

export default MapShow