const router = require('express').Router()

let Journey = require('../models/journey')

/**
 * API endpoint for journeyview, showing the next 10 journeys paginated.
 */
router.get('/', async (req, res) => {
        const SIZE = 10
        const page = parseInt(req.query.page || 0 )

        const journeys = await Journey.find({}).limit(SIZE)
            .skip(SIZE * page)

        res.json({
            journeys
        })
})

module.exports = router