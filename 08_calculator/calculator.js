const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	// reduce method
  return array.reduce((a, b) => a + b, 0);
};

const multiply = function(array) {
  return array.reduce((a, b) => a * b, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(n) {
	if (n === 0) { // 0! = 1
    return 1;
  } else {
    return n * factorial(n - 1); // call each time with n - 1 until n = 0
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
