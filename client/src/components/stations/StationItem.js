import React from 'react'

/**
 * Displays data fro a single station item at stationtable
 * @returns TableRow containing station data
 */
const StationItem = () => {
    return (
        <tr className='tr-station-item'>
            <td className='td-station-item'>Kamppi</td>
            <td className='td-station-item'>Kamppi</td>
            <td className='td-station-item'>Helsinki</td>
            <td className='td-station-item'>Citybike</td>
        </tr>
    )
}

export default StationItem