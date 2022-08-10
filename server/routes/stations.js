const router = require('express').Router()

let Station = require('../models/stations')
let Journey = require('../models/journeys')

/**
 * API endpoint for stationview, showing the next 10 stations paginated.
 */
router.get('/', async (req, res) => {
        const SIZE = 5
        const page = parseInt(req.query.page || 0 )

        try {
             const stations = await Station.find({}).limit(SIZE)
             .skip(SIZE * page)
             res.send(stations)
        }catch(err) {
             console.error(err)
        }
})

/**
 * API endpoint to get information about journies ending/starting from 
 * wanted station.
 */
router.get('/:id', async (req,res) => {
    
    const stationId = Number(req.params.id)

    let startCount, endCount, avgDistanceStart, avgDistanceEnd, avgTimeStart, avgTimeEnd

    //Count journeys
    try {
        startCount = await Journey.countDocuments({departureStationId: stationId})
        endCount = await Journey.countDocuments({returnStationId: stationId})
    }catch(err) {
        console.error(err)
    }
    
    console.log(stationId)

    //Avg distance
    try {
        avgDistanceStart = await Journey.aggregate([
                {$match: {departureStationId: stationId}},
                {$group: {_id: null, avg: {
                        $avg: '$distance'
                }}}
        ])

        avgDistanceEnd = await Journey.aggregate([
                {$match: {returnStationId: stationId}},
                {$group: {_id: null, avg: {
                        $avg: '$distance'
                }}}
        ])
    }catch(err) {
        console.error(err)
    }

    //Avg time
    try {
        avgTimeStart = await Journey.aggregate([
                {$match: {departureStationId: stationId}},
                {$group: {_id: null, avg: {
                        $avg: '$duration'
                }}}
        ])

        avgTimeEnd = await Journey.aggregate([
                {$match: {returnStationId: stationId}},
                {$group: {_id: null, avg: {
                        $avg: '$duration'
                }}}
        ])
    }catch(err) {
        console.error(err)
    }


    return res.json({
        startCount: startCount,
        endCount: endCount,
        avgDistanceStart: avgDistanceStart,
        avgDistanceEnd: avgDistanceEnd,
        avgTimeStart: avgTimeStart,
        avgTimeEnd: avgTimeEnd
    })

    
    
})


module.exports = router