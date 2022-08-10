import React, { useEffect, useState } from 'react'
import SingleStationTable from './SingleStationTable'
import StationMap from "../maps/StationMap"
import axios from 'axios'
import SingleStationStats from './SingleStationStats'

/**
 * Component will be shown inside a modal to display data of a station.
 * @param {} param0 trigger and station
 * @returns ViewSingleStation
 */
const ViewSingleStation = ({setTrigger, station}) => {

    const [stats, setStats] = useState()
   
    useEffect(() => {
        const fetchAverages = async () => {
            const res = await axios.get(`/api/stations/${station.id}`)
            setStats(res.data)
        }
            fetchAverages()
            
    }, [])
    return (
    <div className='single-station-container'>
        <div className='single-station-inner'>
        <h2 className='single-station-h2'>{station.nameFi + " / " + station.nameSe}</h2>
        <SingleStationTable station={station} />
        <SingleStationStats station={station} stats={stats}/>
        <StationMap station={station}/>
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