'use strict';

// const dogsJulia = [3, 5, 2, 12, 7];

// const dogsKate = [4, 1, 15, 8, 3];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const onlyDogsJulia = dogsJulia.slice(1, -2);
//   const allDogs = dogsKate.concat(onlyDogsJulia);
//   allDogs.forEach((dog, i) => {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(
//         `Dog number ${i + 1} is still a puppy, and is ${dog} years old 🐶`
//       );
//     }
//   });
// };

// checkDogs(dogsJulia, dogsKate);

const dogsAges1 = [5, 2, 4, 1, 15, 8, 3];
const dogsAges2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const humanAges = ages
    .map(item => {
      if (item <= 2) {
        return 2 * item;
      } else if (item > 2) {
        return 16 + item * 4;
      }
    })
    .filter(age => age > 18)
    .reduce((sum, current, i, arr) => sum + current / arr.length, 0);
  console.log(humanAges);
};

calcAverageHumanAge(dogsAges1);
calcAverageHumanAge(dogsAges2);
