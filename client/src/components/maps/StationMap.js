import React from "react"
import GoogleMapReact from 'google-map-react'

const Marker = ({text}) => {
  return (
    <div className="marker-container" style={{textAlign: 'center'}}>
    <img style= {{width: '20px', height: '30px', textAlign: 'center'}}src={require('./marker.png')}/>
    </div>
  )
}

const StationMap = ({station}) => {

  console.log(station)


    const defaultProps = {
        center: {
          lat: station.coordY,
          lng: 	station.coordX
        },
        zoom: 16
      };

    return (
        <div style= {{width: '100%', height: '30vh', padding: '5px', textAlign: 'center'}}>
            <GoogleMapReact
                className="react-map"
                bootstrapURLKeys={{key: process.env.GOOGLE_MAPS_API_KEY}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                
            >
                  <Marker
                    lat={station.coordY}
                    lng={station.coordX}
                    text={station.nameFi}
                    />
            </GoogleMapReact>
        </div>
    )
}

export default StationMap