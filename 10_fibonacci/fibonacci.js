const fibonacci = function(n) {
    // no negative numbers
    // can be a string
    // a fibonacci sequence is a sequence of numbers where the next number is the sum of the previous two numbers
    n = parseInt(n);
    if (n < 0) {
        return "OOPS";
    } else if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
