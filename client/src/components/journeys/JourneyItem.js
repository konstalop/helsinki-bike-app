import React from 'react'

/**
 * Journey item which contains data for a single journey to be displayed in journeytable.
 * @returns table row
 */
const JourneyItem = () => {
    return (
        <tr className='tr-journey-item'>
            <td className='td-journey-item'>12</td>
            <td className='td-journey-item'>Kamppi</td>
            <td className='td-journey-item'>13</td>
            <td className='td-journey-item'>Forum</td>
            <td className='td-journey-item'>200m</td>
            <td className='td-journey-item'>60min</td>
        </tr>
    )
}

export default JourneyItem