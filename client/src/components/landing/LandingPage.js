import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

    const navigate = useNavigate()

    return (
        <div className='landing-container'>
            <h1 className='landing-h1'>Helsinki City Bikes</h1>
            <div>
                <button className='journeys-btn' onClick={() => navigate('/journeys')}>Journeys</button>
                <button className='stations-btn' onClick={() => navigate('/stations')}>Stations</button>
            </div>
        </div>
    )
}

export default LandingPage