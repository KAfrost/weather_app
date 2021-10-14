const request = require("request");
const weather  = (lat, long, callback) => {
    
    const url ="http://api.weatherstack.com/current?access_key=3aef2adf0df4f799aa5e7c066ff27de6&units=f&query=" + encodeURIComponent(lat) + "," + encodeURIComponent(long);

    request({url: url, json: true}, (error, response) => {
        if (error){
            callback("Unable to connect to weather service.", undefined);
        } else if (response.body.error){
            callback("Unable to find location", undefined);
        }else {
            callback(undefined, "The current conditions are " + response.body.current.weather_descriptions[0] + ". It is currently " +  response.body.current.temperature + " degrees. And it feels like " + response.body.current.feelslike + " degrees.");
        }
    });
};

module.exports = weather;

//weatherstack Pwd - mt9ceGXgcnYUBRT
//weatherstack api key - 3aef2adf0df4f799aa5e7c066ff27de6
//http://api.weatherstack.com/