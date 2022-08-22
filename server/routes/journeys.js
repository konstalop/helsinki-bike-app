const router = require('express').Router()

let Journey = require('../models/journeys')

/**
 * API endpoint for journeyview, showing the next 10 journeys paginated.
 */
router.get('/', async (req, res) => {
        const SIZE = 15
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
 * API endpoint for searching journeys
 */
router.get('/search/:name', async (req, res) => {

    const notAllowed =  /["§%()\[\]{}=\\?´`\\*'#<>|,;.:+_-]+/g
    const journeyName = req.params.name
    
    const cleanJourneyName = journeyName.replace(notAllowed, "")
    const page = parseInt(req.query.page || 0)
    const regex = new RegExp(cleanJourneyName, 'i')
    const SIZE = 15  

    try {
        const journeys = await Journey.find({$or: [
            {departureStation: {$regex: regex}}, 
            {returnStation :{$regex: regex}}
        ]}).limit(SIZE)
            .skip(SIZE * page)
        res.send(journeys)
    }catch(err) {
        console.error(err)
    }
})

module.exports = router