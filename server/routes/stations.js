const router = require('express').Router()

let Station = require('../models/stations')
let Journey = require('../models/journeys')

/**
 * API endpoint for stationview, showing the next 10 stations paginated.
 */
router.get('/', async (req, res) => {
        const SIZE = 10
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

    if (isNaN(stationId)) return res.sendStatus(400)

    let startCount, endCount, avgDistanceStart, avgDistanceEnd, avgTimeStart, avgTimeEnd

    //Count journeys
    try {
        startCount = await Journey.countDocuments({departureStationId: stationId})
        endCount = await Journey.countDocuments({returnStationId: stationId})
    }catch(err) {
        console.error('Error in count' + err)
    }


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
        console.error('Error in avgDistance ' + err)
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
        console.error('Error in avg time ' + err)
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

/**
 * API endpoint to search stations
 */
router.get('/search/:name', async (req, res) => {

        const notAllowed =  /["§%()\[\]{}=\\?´`\\*'#<>|,;.:+_-]+/g
        const stationName = req.params.name

        const cleanStationName = stationName.replace(notAllowed, "")
        const regex = new RegExp(cleanStationName, 'i')
        const SIZE = 10
        try {
                const stations = await Station.find({nameFi:  {$regex: regex}})
                .limit(SIZE)
                res.send(stations)
        }catch(err) {
                console.error(err)
        }
})


module.exports = router