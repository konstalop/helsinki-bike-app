import React from 'react'

/**
 * Displays data fro a single station item at stationtable
 * @returns TableRow containing station data
 */
const StationItem = ({station, setPopup, setCurrent}) => {

    let operator = station.operator

    if (station.operator === ' ') {
        operator = 'Not Specified!'
    }

    const handlePopup = () => {
        setPopup(true)
        setCurrent(station)
    }

    return (
        <tr className='tr-station-item' onClick={handlePopup}>
            <td className='td-station-item'>{station.nameFi}</td>
            <td className='td-station-item'>{station.addressFi}</td>
            <td className='td-station-item'>{operator}</td>
        </tr>
    )
}

export default StationItem