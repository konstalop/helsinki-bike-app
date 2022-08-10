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
    departureStationId: {
        type: Number,
        required: true
    },
    returnStation: {
        type: String,
        ref: 'station'
    },
    returnStationId: {
        type: Number,
        required: true
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

module.exports = mongoose.model('journeys', journeySchema)