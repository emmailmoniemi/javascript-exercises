const findTheOldest = function(people) {

    return people.reduce((oldest, current) => {
        let oldestAge;
        let currentAge;
        if (!oldest.yearOfDeath) {
            oldestAge = new Date().getFullYear() - oldest.yearOfBirth;
        } else {
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        }
        if (!current.yearOfDeath) {
            currentAge = new Date().getFullYear() - current.yearOfBirth;
        } else {
            currentAge = current.yearOfDeath - current.yearOfBirth;
        }

        return oldestAge < currentAge ? current : oldest;
   });  

}

// Do not edit below this line
module.exports = findTheOldest;

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
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
  ]
  console.log(findTheOldest(people));