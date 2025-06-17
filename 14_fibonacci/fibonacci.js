const fibonacci = function (num) {
  let fib;
  //account for user errors
  num = parseInt(num)
  if (num < 0) return "OOPS"
  if (num === 0) return 0;
  if (num === 1 || num === 2) return 1;
  //calls the function recussively to get the values
  fib = fibonacci(num - 1) + fibonacci(num - 2);
  return fib
};

// Do not edit below this line
module.exports = fibonacci;
