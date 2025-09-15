const convertToCelsius = function(temprature) {
  if (Number.isInteger(((temprature-32)*(5/9)))) {
    return ((temprature-32)*(5/9));
  }
  else {
    return parseFloat(((temprature-32)*(5/9)).toFixed(1));
  }
}

const convertToFahrenheit = function(temprature) {
  if (Number.isInteger(((temprature*9/5)+32))) {
    return ((temprature*9/5)+32)
  }
  else {
    return parseFloat(((temprature*9/5)+32).toFixed(1));
  }
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
