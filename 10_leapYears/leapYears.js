const leapYears = function (year) {
    let century = year % 400 === 0
    console.log(century)
    if (century) return true
    if (year % 100 === 0 && year % 4 === 0) return false
    return year % 4 === 0 ? true : false

};

leapYears(1988)
leapYears(2000)
// Do not edit below this line
module.exports = leapYears;
