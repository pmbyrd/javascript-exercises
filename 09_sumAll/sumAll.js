const sumAll = function (a, b) {
    //make an array of value a and b and all the values in between
    if (a < 0 || b < 0) return "ERROR";
    if(!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR"

    const numbers = range(a, b)
    console.log(range)
    const intialValue = 0
    const Value = numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue, intialValue
    )
    console.log(sumWithIntialValue)
    return sumWithIntialValue
};

function range(start, end) {
    let result = []

    if (start < end) {
        for (let i = start; i <= end; i++) {
            result.push(i);
        }
    } else {
        for (let i = start; i >= end; i--) {
            result.push(i)
        }
    }
    console.log(result)
    return result
}
sumAll(1, 5)
sumAll(5, 1)
// Do not edit below this line
module.exports = sumAll;
