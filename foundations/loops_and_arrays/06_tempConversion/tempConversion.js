/*
Formula
C/5 = (F-32)/9
*/

const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) / 9 * 5;
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (9 * celsius / 5) + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
