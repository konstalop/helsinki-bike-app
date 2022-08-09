const router = require('express').Router()

let Journey = require('../models/journey')

/**
 * API endpoint for journeyview, showing the next 10 journeys paginated.
 */
router.get('/', async (req, res) => {
        const SIZE = 10
        const page = parseInt(req.query.page || 0 )
        try {
            const journeys = await Journey.find({}).limit(SIZE)
            .skip(SIZE * page)
            res.send(journeys)
        }catch(err) {
            console.error(err)
        }
})

/**
 * API endpoint for creating a new journey
 */
router.post('/add', async (req, res) => {
    
})

module.exports = router