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
    departureStationId: {
        type: Number,
        required: true
    },
    departureStationName: {
        type: String,
        required: true
    },
    returnStationId: {
        type: Number,
        required: true
    },
    returnStationName: {
        type: String,
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

module.exports = mongoose.model('journey', journeySchema)