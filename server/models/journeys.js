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
        required: true
    },
    departureStationId: {
        type: Number,
        ref: 'stations'
    },
    returnStation: {
        type: String,
        required: true
    },
    returnStationId: {
        type: Number,
        ref: 'stations'
    },
    distance: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('journeys', journeySchema)