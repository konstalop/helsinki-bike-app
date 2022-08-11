import React from "react"
import GoogleMapReact from 'google-map-react'
import Marker from "./Marker.js";

/**
 * Showing the location of wanted station using google maps API
 * @param {Object} station data of the station
 * @returns google map of the station
 */
const StationMap = ({station}) => {
    const defaultProps = {
        center: {
          lat: station.coordY,
          lng: 	station.coordX
        },
        zoom: 15,
        draggable: false
      };

    return (
        <div style= {{width: '90%', height: '30vh', padding: '10px', marginTop: '10px', marginLeft:'auto', marginRight:'auto', border: '1px solid white', borderRadius: '10px'}}>
            <GoogleMapReact
                className="react-map"
                bootstrapURLKeys={{key:"AIzaSyALT6J0TXAXodrkDuB3NuDNoEc7truJEw4"}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}        
                options={{
                  gestureHandling: 'none',
                  zoomControl: false
                }}        
            >
                  <Marker
                    lat={station.coordY}
                    lng={station.coordX}
                    />
            </GoogleMapReact>
        </div>
    )
}

export default StationMap