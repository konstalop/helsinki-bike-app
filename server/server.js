const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI, {dbName: process.env.DB_NAME})
.then(() => 
console.log('Connected to MongoDB')).catch(err => console.error(err))

console.log(mongoose.connection.collection)
const journeyRouter = require('./routes/journeys')
const stationRouter = require('./routes/stations')
const statsRouter = require('./routes/stats')

app.use('/api/journeys', journeyRouter)
app.use('/api/stations', stationRouter)
app.use('/api/stats', statsRouter)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'))

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))

