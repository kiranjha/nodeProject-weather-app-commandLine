require('dotenv').config()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error)
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error)
      }

      console.log(location)
      console.log(forecastData)
    })
  })
}

// const url = 'http://api.weatherstack.com/current?access_key=9d94f16e0ef20240ad0d60a7a3985a83&query=37.8267,-122.4233&units=f'
// request({ url: url, json: true }, (error, response) => {
// if(error) {
//     console.log(`Unable to connect to weather service!`)
// } 
// else if (response.body.error) {
//     console.log(`Unable to find location`);
// }
// else {
//     console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degree out. It feels like ${response.body.current.feelslike} degree out.`);
// }

// })

// Goal: Print a samll forecast to the user
// 1. Print: "It is currently 58.55 degree out. There is a 0% chance of rain."
// 2. Test your work!

// Geocoding
// address -> Lat/Lon -> weather


// Goal: Print the lat/long for Los Angeles
// 1. Fire off a new request to the URL explored in browser
// 2. Have the request module parse it as JSON
// 3. Print both the latitude and longitude to the terminal
// 4. Test your work!



// Goal: Handle errors for geocoding request

// 1. Setup an error handler for low-level error
// 2. Test by disabling network request and running the app
// 3. Setup error handling for no matching result
// 4. Test by altering the search term and running the app

// https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2lyYW5qaGEiLCJhIjoiY2w5cXFzZDY4MGo0ZDNudDJhdXA5MXJlNSJ9.tLfagFb7BAYtmPi-q2J03A&limit=1
// const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1Ijoia2lyYW5qaGEiLCJhIjoiY2w5cXFzZDY4MGo0ZDNudDJhdXA5MXJlNSJ9.tLfagFb7BAYtmPi-q2J03A&limit=1'
// request({ url: geoCodeURL, json: true }, (error, response) => {
//     if ( error ) {
//         console.log(`Unable to connect to location service`);
//     } else if ( response.body.features.length === 0) {
//         console.log(`Unable to find location. Try another search.`);
//     } else {
//         const latitude = response.body.features[0].center[1];   //positive
//         const longitude = response.body.features[0].center[0];  //negative
//         console.log(`Latitude : ${latitude} Longitude : ${longitude}`);
        

//     }
// })
