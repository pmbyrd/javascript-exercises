const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((prev, next) => prev + next, 0);
};

const multiply = function (arr) {
  return arr.reduce((prev, next) => prev * next, 1)
};

const power = function (a, b) {
  return a ** b
};

const factorial = function (num) {
  if(num === 0) {
    return 1
  } else {
    return factorial(num-1) * num
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
