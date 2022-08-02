const mongoose = require('mongoose')

/**
 * Database schema for bike journeys.
 */
const journeySchema = mongoose.Schema({
    departureTime: {
        type: String,
        required: true
    },
    returnTime: {
        type: String,
        required: true
    },
    departureStation: {
        type: String,
        ref: 'station'
    },
    returnStation: {
        type: String,
        ref: 'station'
    },
    distanceMeters: {
        type: Number,
        required: true
    },
    durationSeconds: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('journey', journeySchema)