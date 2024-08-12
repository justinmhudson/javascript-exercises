//const convertToCelsius = temp => Math.round((temp - 32) * 5 / 9 * 10) / 10;

const convertToCelsius = function(temp) {
  let tempInCelcius = (temp - 32) * 5 / 9;
  let roundedTemp = Math.round(tempInCelcius * 10) / 10;
  return roundedTemp;
};

//const convertToFahrenheit = temp => Math.round((temp * 9 / 5 + 32) * 10) / 10;

const convertToFahrenheit = function(temp) {
  let tempInFahrenheit = temp * 9 / 5 + 32;
  let roundedTemp = Math.round(tempInFahrenheit * 10) / 10;
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
