import React from 'react'

/**
 * Marker to show on the map
 * @returns marker
 */
 const Marker = () => {
    return (
      <div className="marker-container">
      <img style= {{width: '20px', height: '30px'}}src={require('./marker.png')}/>
      </div>
    )
}

export default Marker