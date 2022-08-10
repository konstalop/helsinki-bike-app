const router = require('express').Router()

let Station = require('../models/stations')
let Journey = require('../models/journeys')

router.get('/', async (req, res) => {
    try {
            const countJourneys = await Journey.count()
            const countStations = await Station.count()
            res.json({ journeys: countJourneys,
                        stations: countStations
                    })
    }catch(err) {
        console.error(err)
    }
})

module.exports = router
