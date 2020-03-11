'use strict'

const express = require('express')
const app = express()
const locations = require('./routes/locations.js')

app.use('/locations', locations)

const server = app.listen(3000, () => {
  console.log(`Listening on port ${server.address().port}`)
})
