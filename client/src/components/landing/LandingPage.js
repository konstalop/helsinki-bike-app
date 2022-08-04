import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

/**
 * Landing bike to select between journeys and stations.
 * @returns landing page for bike app
 */
const LandingPage = () => {

    const [stats, setStats] = useState(0)


    useEffect(() => {
        const fetchCount = async () => {
            const res = await axios.get('/api/stats')
            setStats(res.data)
        }

        fetchCount()
    },[])

    const navigate = useNavigate()

    return (
        <div className='landing-container'>
            <h1 className='landing-h1'>Helsinki City Bikes</h1>
            <div>
                <button className='journeys-btn' onClick={() => navigate('/journeys')}>Journeys</button>
                <button className='stations-btn' onClick={() => navigate('/stations')}>Stations</button>
                <h4 className='landing-h4'>Database Stats</h4>
                <p className='landing-data-text'>{stats.journeys} Journeys</p>
                <p className='landing-data-text'>{stats.stations} Stations</p>
                <p></p>
            </div>
        </div>
    )
}

export default LandingPage