var apiKey = "95hcXeOsnd4dIFUnbepjXbFxyLKnwAAA";


// Global variables

var cityLat;
var cityLong;
var coordinates = [];
var here = [];

var userLocation = function(cityName){
    fetch(`https://www.mapquestapi.com/geocoding/v1/address?key=${apiKey}&location=${cityName}`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        cityLat = data.results[0].locations[0].latLng.lat;
        cityLong = data.results[0].locations[0].latLng.lng;
        console.log(cityLat);
        console.log(cityLong);
        console.log(data);
        
        coordinates.push(cityLat, cityLong)
        console.log(coordinates);
        localStorage.setItem('coords', JSON.stringify(coordinates))
    })
};

here = JSON.parse(localStorage.getItem('coords'))

userLocation('M4L2Y7')
console.log(here)

