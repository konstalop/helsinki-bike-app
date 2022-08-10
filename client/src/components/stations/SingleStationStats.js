import React from "react";

const SingleStationStats = ({stats, station}) => {

    if (stats === undefined) {
        return (
         <>
        <h3 className="loading-h3">Getting stats for {station.nameFi}</h3>
        <div id="loading"></div>
        </>
       )
    }

    return (
        <>
        <table className="single-table-stats">
        <tbody>
            <tr className="single-tr">
                <th className="single-th">Journeys starting from {station.nameFi}</th>
                <th className="single-th">Journeys ending to {station.nameFi}</th>
            </tr>
            <tr className="single-tr">
                <td className="single-td">{stats.startCount}</td>
                <td className="single-td">{stats.endCount}</td>
            </tr>
            <tr className="single-tr">
                <th className="single-th">Average distance of a starting journey</th>
                <th className="single-th">Average distance of an ending journey</th>
            </tr>
            <tr className="single-tr">
                <td className="single-td">{Math.floor(stats.avgDistanceStart[0].avg) + " meters"}</td>
                <td className="single-td">{Math.floor(stats.avgDistanceEnd[0].avg) + " meters"}</td>
            </tr>
            <tr className="single-tr">
                <th className="single-th">Average duration of a starting journey</th>
                <th className="single-th">Average duration of an ending journey</th>
            </tr>
            <tr className="single-tr">
                <td className="single-td">{Math.floor(stats.avgTimeStart[0].avg / 60) + " minutes"}</td>
                <td className="single-td">{Math.floor(stats.avgTimeEnd[0].avg / 60)  + " minutes"}</td>
            </tr>
        </tbody>
        </table>
        </>
    )
}

export default SingleStationStats