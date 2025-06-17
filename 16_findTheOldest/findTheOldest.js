const findTheOldest = function (array) {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  let modifiedArray = [];
  modifiedArray = array
    .map((item) => {
      const yearOfDeath = Object.hasOwn(item, "yearOfDeath")
        ? item.yearOfDeath
        : currentYear;
      const yearsLived = yearOfDeath - item.yearOfBirth;
      return { ...item, yearOfDeath: currentYear, yearsLived };
    })
    .reduce((max, current) => {
        return current.yearsLived > max.yearsLived ? current : max
    });
    console.log(modifiedArray.name)
  return modifiedArray.name;
};
const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
