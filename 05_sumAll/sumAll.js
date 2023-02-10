// given two numbers, return the sum of those two plus the sum of all the numbers between them
// the lowest number will not always come first
// if any of the parameters are not numbers, return 'ERROR'
// if any of the parameters are negative, return 'ERROR'
const sumAll = function(x,y) {
    let sum = 0;
    if (typeof x !== 'number' || typeof y !== 'number') {
        return 'ERROR';
    }
    if (x < 0 || y < 0) {
        return 'ERROR';
    }
    if (x < y) {
        for (let i = x; i <= y; i++) {
            sum += i;
        }
    }
    else {
        for (let i = y; i <= x; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
