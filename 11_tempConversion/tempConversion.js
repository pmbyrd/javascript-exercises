const convertToCelsius = function (temp) {
  //C=(F-32) * 5/9
  const C = Number((temp - 32) * 5 / 9)
  return C % 1 === 0 ? C : Number(C.toFixed(1))
};

const convertToFahrenheit = function (temp) {
  //F=(9/5 * C) + 32
  const F = Number((9/5 * temp) + 32)
  return F % 1 === 0 ? F : Number(F.toFixed(1)) 
};

convertToCelsius(32)
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
