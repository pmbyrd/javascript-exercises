const repeatString = function(string, number) {
   let result = '';
    for (let i = 0; i < number; i++) {
        result += string;
    } if (number < 0) {
        return 'ERROR';
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
