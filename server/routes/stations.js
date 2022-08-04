const router = require('express').Router()

let Station = require('../models/station')

/**
 * API endpoint for stationview, showing the next 10 stations paginated.
 */
router.get('/', async (req, res) => {
        const SIZE = 5
        const page = parseInt(req.query.page || 0 )

        const stations = await Station.find({}).limit(SIZE)
        .skip(SIZE * page)
        res.send(stations)
})

module.exports = router