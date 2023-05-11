const convertToCelsius = function(farhen) {
  return Number(((farhen-32)/(1.8)).toFixed(1));
};

const convertToFahrenheit = function(cel) {
  return Number(((cel*(9/5))+32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
