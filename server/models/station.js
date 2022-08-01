const mongoose = require('mongoose')

/**
 * Database schema for city bike stations.
 */
const stationSchema = mongoose.Schema({
    stationId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    operator: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('station', stationSchema)