let numberOfLocations = 0

class Location {
  constructor (lat, lon) {
    this.id = numberOfLocations++
    this.latitude = lat
    this.longitude = lon
  }

  set id (newId) {
    if (!!isNaN(newId) || newId >= 0) {
      this._id = newId
    } else {
      throw new TypeError('The id must be a number and 0 or higher')
    }
  }

  set latitude (newLat) {
    if (!(newLat < -90 || newLat > 90)) {
      this._latitude = newLat
    } else {
      throw new TypeError('Latitude must be between -90 and 90')
    }
  }

  set longitude (newLon) {
    if (!(newLon < -180 || newLon > 180)) {
      this._longitude = newLon
    } else {
      throw new TypeError('Longitude must be between -180 and 180')
    }
  }

  get id () {
    return this._id
  }

  get latitude () {
    return this._latitude
  }

  get longtitutde () {
    return this._longitude
  }
}

module.exports = Location
