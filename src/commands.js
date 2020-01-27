'use strict'

const fetch = require('node-fetch')

const APIXU_KEY = process.env.ACCESS_KEY

const debugVar = (varName, aVar) => {
  if (process.env.DEBUG) {
    console.log('Variable "' + varName + '" value: ', aVar)
  }
}

const fetchNow = async city => {
  debugVar('city', city);
  const response = await fetch(
    `http://api.weatherstack.com/current?access_key=${APIXU_KEY}&query=${city}`
  )

  const data = await response.json()
  debugVar('data', data);

  const now = {
    location: data.location.name,
    country: data.location.country,
    longitude: data.location.lon,
    latitude: data.location.lat,
    temparature: data.current.temperature,
    condition: data.current.weather_descriptions
  }

  console.log(now)
}

const weatherForecast = async city => {
  const response = await fetch(
    `http://api.weatherstack.com/forecast?access_key=${APIXU_KEY}&query=${city}`
  )
  const data = await response.json()

  console.log(data.forecast)
}

// export all methods
module.exports = {
  fetchNow,
  weatherForecast
}
