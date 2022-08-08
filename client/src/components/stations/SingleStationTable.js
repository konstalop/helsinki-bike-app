import React from "react";

/**
 * Showing a table containing the information for a single station
 * @param {Object} station station to be viewed
 * @returns Station table
 */
const SingleStationTable = ({station}) => {

    return (
        <table className="single-table">
            <tbody>
                <tr className="single-tr">
                    <th className="single-th">Name</th>
                    <th className="single-th">Address</th>
                    <th className="single-th">Operator</th>
                </tr>
                <tr className="single-tr">
                    <td className="single-td">{station.nameFi + ", " + station.nameSe} </td>
                    <td className="single-td">{station.addressFi + ", " + station.addressSe}</td>
                    <td className="single-td">{station.operator}</td>
                </tr>
                <tr>    
                    <th className="single-th">City</th>
                    <th className="single-th">Capacity</th>
                </tr>
                <tr className="single-tr">
                    <td className="single-td">{station.cityFi + ", " +station.citySe}</td>
                    <td className="single-td">{station.capacity}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default SingleStationTable