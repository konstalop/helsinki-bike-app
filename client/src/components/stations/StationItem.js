import React from 'react'

/**
 * Displays data fro a single station item at stationtable
 * @returns TableRow containing station data
 */
const StationItem = ({station}) => {

    let operator = station.operator

    if (station.operator === ' ') {
        operator = 'Not Specified!'
    }

    return (
        <tr className='tr-station-item'>
            <td className='td-station-item'>{station.nameFi}</td>
            <td className='td-station-item'>{station.addressFi}</td>
            <td className='td-station-item'>{operator}</td>
        </tr>
    )
}

export default StationItem