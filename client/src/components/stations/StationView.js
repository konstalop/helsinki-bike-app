import React from 'react'
import StationItem from './StationItem'

/**
 * Stations page to view, filter and search stations.
 * @returns page for /stations
 */
const StationView = () => {
    return (
        <div className='stations-container'>
            <h1 className='stations-h1'>Helsinki City Bike Stations</h1>
            <div>
                <h4 className='stations-h4'>Click the station for extra information!</h4>
                <table className='stations-table'>
                    <tbody>
                        <tr className='tr-stations'>
                            <th className='th-stations'>Name</th>
                            <th className='th-stations'>Address</th>
                            <th className='th-stations'>City</th>
                            <th className='th-stations'>Operator</th>
                        </tr>
                        <StationItem></StationItem>
                        <StationItem></StationItem>
                        <StationItem></StationItem>
                        <StationItem></StationItem>
                        <StationItem></StationItem>
                        <StationItem></StationItem>
                        <StationItem></StationItem>
                        <StationItem></StationItem>
                        <StationItem></StationItem>
                        <StationItem></StationItem>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StationView