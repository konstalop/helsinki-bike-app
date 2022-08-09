import React from 'react'

/**
 * Journey item which contains data for a single journey to be displayed in journeytable.
 * @returns table row
 */
const JourneyItem = ({journey}) => {

    const minutesDuration = Math.floor(journey.duration / 60) + "min"
    const distanceKm = journey.distance / 1000 + "km"

    const departureDate = new Date(journey.departureTime).toLocaleString('en-GB')
    const returnTime = new Date(journey.returnTime).toLocaleString('en-GB')

    /**
     * View a single journey data
     */
    const handleViewingJourney = () => {
        
    }

    return (
        <tr className='tr-journey-item' onClick={handleViewingJourney}>
            <td className='td-journey-item'>{journey.departureStation}</td>
            <td className='td-journey-item'>{journey.returnStation}</td>
            <td className='td-journey-item'>{distanceKm}</td>
            <td className='td-journey-item'>{minutesDuration}</td>
        </tr>
    )
}

export default JourneyItem