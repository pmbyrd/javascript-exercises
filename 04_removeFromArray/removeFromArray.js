// param arr, ...args
// loop through the array and check if the value is in the array
// if it is, remove it
// return arr
console.log("hello world")
console.log("hello again")
const removeFromArray = function() {
    let arr = arguments[0];
    let args = Array.from(arguments).slice(1);
    for (let i = 0; i < args.length; i++) {
        if (arr.includes(args[i])) {
            arr.splice(arr.indexOf(args[i]), 1);
        }
    }
    return arr;
};
removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
