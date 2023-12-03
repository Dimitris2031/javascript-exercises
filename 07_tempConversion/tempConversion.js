const convertToCelsius = function(Fahrenheit) {
  let convertTocelcius = ((Fahrenheit-32)*5)/9;
  let roundCelcius = convertTocelcius.toFixed(1);
  return Number(roundCelcius);
};

const convertToFahrenheit = function(Celsius) {
  let convertTofahrenheit = ((Celsius*1.8)+32);

  let roundFahrenheit = convertTofahrenheit.toFixed(1);
  return Number(roundFahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
