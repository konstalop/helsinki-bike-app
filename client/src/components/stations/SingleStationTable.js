import React from "react";

/**
 * Showing a table containing the information for a single station
 * @param {Object} station station to be viewed
 * @returns Station table
 */
const SingleStationTable = ({station}) => {

    let city
    let operator = station.operator

    if (station.operator === " ") {
        operator = "Not specified!"
    }

    if (station.cityFI || station.citySe === " ") {
        city = "Not specified!"
    } else {
        city = station.cityFi + " / " + station.citySe
    }

    return (
        <table className="single-table">
            <tbody>
                <tr className="single-tr">
                    <th className="single-th">Address</th>
                    <th className="single-th">Operator</th>
                    <th className="single-th">City</th>
                    <th className="single-th">Capacity</th>
                </tr>
                <tr className="single-tr">
                    <td className="single-td">{station.addressFi + " / " + station.addressSe} </td>
                    <td className="single-td">{operator}</td>
                    <td className="single-td">{city}</td>
                    <td className="single-td">{station.capacity}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default SingleStationTable