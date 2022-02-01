'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const sort = movements.sort(function (a, b) {
//   return a - b;
// });

// console.log(sort);
// movements.forEach(function (item, i) {
//   document.write(`${i + 1} : ${item} ;`);
// });

// for (const movement of movements) {

//   document.write(`${movement};`);
// }

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// console.log(currencies);

currencies.forEach((value, key, map) => {
  console.log(`${key}:${value}`);
});

const currenciesUnique = new Set(['USD', 'EUR', 'UAH', 'USD', 'GBP', 'UAH']);

const eurToUsd = 1.1;

const movementsUSD = movements.map(mov => {
  return mov * eurToUsd;
});

console.log(movements);
console.log(movementsUSD);

const movementsDescription = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});

console.log(movements);
console.log(movementsDescription);

const deposits = movements.filter(mov => {
  return mov > 0;
});

const withdrawals = movements.filter(mov => {
  return mov < 0;
});

console.log(deposits);
console.log(withdrawals);

const balance = movements.reduce((acc, cur, i, arr) => {
  return acc + cur;
});

console.log(balance);

const maxNum = Math.max(...movements);

const minNum = Math.min(...movements);
