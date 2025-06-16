const palindromes = function (phrase) {
    let result = phrase.toLowerCase().split("").toReversed().join("")
    console.log(result)

    if(phrase === result) return true
};
let result = palindromes("racecar")
result = palindromes("hello")

// Do not edit below this line
module.exports = palindromes;
