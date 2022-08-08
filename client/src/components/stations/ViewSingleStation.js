import React from 'react'
import SingleStationTable from './SingleStationTable'

const ViewSingleStation = ({setTrigger, station}) => {
    return (
    <div className='single-station-container'>
        <div className='single-station-inner'>
        <h2 className='single-station-h2'>Viewing station {station.nameFi}</h2>
        <SingleStationTable station={station}/>
        <button
            className='done-btn'
            onClick={() => setTrigger(false)}
        >
            Done
        </button>
        </div>
    </div>
    )
}

export default ViewSingleStation