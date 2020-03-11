const express = require('express')
const app = express()
const router = express.Router()
const Location = require('../model/location.js')

router.use(express.json())
let locationsDb = [new Location(60, 60), new Location(45, 45)]

// GET (all locations)
router.get('/', (req, res) => {
  res.send(locationsDb)
})

// GET (a specific location)
router.get('/:myVariable([0-9]+)', (req, res) => {
  const id = req.params.myVariable
  const location = locationsDb.find(location => location.id == id)
  res.send(location)
})

// DELETE
router.delete('/:myVariable([0-9]+)', (req, res) => {
  const id = req.params.myVariable
  locationsDb = locationsDb.filter(location => location.id != id)
  res.statusCode = 204
  res.send()
})

router.post('/', (req, res) => {
  const data = req.body
  const location = new Location(data.latitude, data.longitude)

  for (let i = 0; i < locationsDb.length; i++) {
    const obj = locationsDb[i]

    if (obj._id === location.id) {
      throw new TypeError('There is already a Location with that ID.')
    } else {
      locationsDb.push(location)
      res.statusCode = 201
    }
  }

  res.send()
})

app.use('/locations', router)

module.exports = router
