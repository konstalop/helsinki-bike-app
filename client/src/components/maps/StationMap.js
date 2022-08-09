import React from "react"
import GoogleMapReact from 'google-map-react'


const Marker = () => {
  return (
    <div className="marker-container">
    <img style= {{width: '20px', height: '30px'}}src={require('./marker.png')}/>
    </div>
  )
}

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
        <div style= {{width: '90%', height: '30vh', padding: '10px', marginLeft:'auto', marginRight:'auto'}}>
            <GoogleMapReact
                className="react-map"
                bootstrapURLKeys={{key: process.env.GOOGLE_MAPS_API_KEY}}
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