var http = require('http');

var city = 'Brussels';

function printMessage(city, temperature, pressure){
  console.log('Il fait exactement ' + temperature + 'ºC à ' + city + ' et la pression est de ' + pressure + '.');
};

var request = http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=c69ed4006ddc68fe679bc5098e805646', function(response){

  var body = '';

  response.on('data', function(chunk){
    body += chunk;
  });

  response.on('end', function(){
    // kelvin to Celcius
    // Celcius = data_weather - 273.15
    var data_weather = JSON.parse(body);
    var celcius = data_weather.main.temp - 273.15

    printMessage(city, celcius, data_weather.main.pressure);
  });

});


