const findCityByName = require('./findCityByName')
const cityDB = require('all-the-cities')
const { getSunrise, getSunset } = require('sunrise-sunset-js')

const findCityByName = function(cityname){
    const result = cityDB.find(function(item){
        return item.name === cityname
    })

    return result
}

console.log(findCityByName('Chengdu'))

const { getSunrise, getSunset }= function(citiestime){
    const result =  citytime.find(function(item){
        return item.time === citiestime
    })
    const sunset = getSunset[item.latitude,item.longitude]
    const sunrise = getSunrise(latitude, longitude, new Date("2020-11-20"))

    return result
}

console.log({ getSunrise, getSunset }('Chengdu'))
