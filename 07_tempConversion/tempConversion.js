// write a function that converts a temperature from Fahrenheit to Celsius
// T(°C) = (T(°F) - 32) × 5/9
// round to 1 decimal
const convertToCelsius = function(temp) {
  temp = (temp - 32) * (5/9);
  return Math.round(temp * 10) / 10;
};

// write a function that converts a temperature from Celsius to Fahrenheit
// T(°F) = T(°C) × 9/5 + 32
const convertToFahrenheit = function(temp) {
  temp = (temp * (9/5)) + 32;
  return Math.round(temp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
