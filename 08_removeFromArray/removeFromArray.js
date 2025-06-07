
const removeFromArray = function (array, ...elements) {
    let index
    for (let el of elements) {
        //change the conditional to continue to loop even if the element if found or else it will exit the loop having once met the condition
        while (array.includes(el)) {
            index = array.indexOf(el)
            array.splice(index, 1)
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
