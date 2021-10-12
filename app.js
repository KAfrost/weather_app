const request = require('request');

const url ="http://api.weatherstack.com/current?access_key=3aef2adf0df4f799aa5e7c066ff27de6&units=f&query=37.8267,-122.4233";

request({url: url, json: true}, (error, response) => {
    if (error){
        console.log("Unable to connect to weather service.")
    }else {
        console.log(response.body.current.weather_descriptions[0] + ". The current temperature is " + response.body.current.temperature + " degrees. It feels like " + response.body.current.feelslike + " degrees.");
    }
})

// const locUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FwcGhpcmVneXBzeSIsImEiOiJja3VvYzNnNDg0YTNnMm5xbGgwMnNveXZwIn0.y-3D2xU_h5UDtl6U9Bi_iQ"

// request({url:locUrl, json:true}, (error, response) => {
//     console.log("Coordinants for " + response.body.features[0].place_name + " are " + response.body.features[0].center);

//     //latitude : response.body.features[0].center[1]
//     //longitude : response.body.features[0].center[0]
// })

//weatherstack Pwd - mt9ceGXgcnYUBRT
//weatherstack api key - 3aef2adf0df4f799aa5e7c066ff27de6
//http://api.weatherstack.com/
//mapbox pwd - jTPebwPt4q52y8x
// mapbox api key - pk.eyJ1Ijoic2FwcGhpcmVneXBzeSIsImEiOiJja3VvYzNnNDg0YTNnMm5xbGgwMnNveXZwIn0.y-3D2xU_h5UDtl6U9Bi_iQ
//https://api.mapbox.com/ 