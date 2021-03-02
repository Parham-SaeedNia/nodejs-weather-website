const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3441922158e2d117bce043ce97b347c2&query='+latitude+','+longitude+'&units=m'

    request({url, json: true},(error,{body})=> {
        if (error) {
                    callback('Unable to connect to weather service', undefined)
                } else if(body.error) {
                    callback('Unable to find location', undefined)
                } else {
                    callback(undefined,body.current.weather_descriptions[0]+' It is currently '+body.current.temperature+
                    ' degrees but it feels like ' + 'And the humidity is '+body.current.humidity + '%  ' +body.current.feelslike +': '+body.location.region)
                }
    })
}

module.exports = forecast