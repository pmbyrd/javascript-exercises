const palindromes = function (str) {
  const strArr = str.toLowerCase().split("")
  const strArrReveresed = strArr.reverse()
  if (strArr.join("") === strArrReveresed.join("")) {
    return true
  } else {
    return false
  }
};

// Do not edit below this line
module.exports = palindromes;
