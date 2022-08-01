const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
.then(() => 
console.log('Connected to MongoDB')).catch(err => console.error(err))

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))