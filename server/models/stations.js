const mongoose = require('mongoose')

/**
 * Database schema for city bike stations.
 */
const stationSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    nameFi: {
        type: String,
        required: true
    },
    nameSe: {
        type: String,
        required: true
    },
    addressFi: {
        type: String,
        required: true
    },
    addressSe: {
        type: String,
        required: true
    },
    cityFi: {
        type: String,
        required: true
    },
    citySe: {
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
    },
    coordX: {
        type: Number,
        required: true
    },
    coordY: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('stations', stationSchema)