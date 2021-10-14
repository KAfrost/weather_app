const geocode = require("./utils/geocode.js");
const weather = require("./utils/weather.js");

let location = process.argv[2];

if (!location){
    return console.log("No location found");
} else {
    geocode(location, (error, data) => {
        if (error){
            return console.log("Error: ", error);
        }

        weather(data.latitude , data.longitude, (error, forecastData) => {
            if (error){
                return console.log("Error: ", error);
            }
            console.log(data.location);
            console.log("Data: ", forecastData);
        })
    }); 
}