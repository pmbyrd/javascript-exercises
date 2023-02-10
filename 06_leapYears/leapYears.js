// is #%4 === 0 and is not a century year (i.e. not a multiple of 100)
// is a century year (i.e. a multiple of 100) and is a multiple of 400
// is a century year (i.e. a multiple of 100) and is not a multiple of 400
// is not a leap year (i.e. not a multiple of 4)
const leapYears = function(num) {   
    if (num % 4 === 0 && num % 100 !== 0) {
        return true;
    }
    else if (num % 100 === 0 && num % 400 === 0) {
        return true;
    }
    else if (num % 100 === 0 && num % 400 !== 0) {
        return false;
    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
