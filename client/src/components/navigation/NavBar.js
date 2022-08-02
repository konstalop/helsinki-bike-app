import React from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Navigation bar to make navigating between pages easier.
 * @returns NavBar component
 */
const NavBar = () => {

    const navigate = useNavigate()

    return (
        <div className='nav-container'>
            <h4 className='nav-text' onClick={() => navigate('/journeys')}>Journeys</h4>
            <h4 className='nav-text' onClick={() => navigate('/')}>Home</h4>
            <h4 className='nav-text' onClick={() => navigate('/stations')}>Stations</h4>
        </div>
    )
}
export default NavBar