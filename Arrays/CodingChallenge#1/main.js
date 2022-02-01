'use strict';

const dogsJulia = [3, 5, 2, 12, 7];

const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const onlyDogsJulia = dogsJulia.slice(1, -2);
  const allDogs = dogsKate.concat(onlyDogsJulia);
  allDogs.forEach((dog, i) => {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(
        `Dog number ${i + 1} is still a puppy, and is ${dog} years old 🐶`
      );
    }
  });
};

checkDogs(dogsJulia, dogsKate);
