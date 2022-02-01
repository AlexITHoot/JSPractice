'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmnund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Scgultz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Muller'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  scorers: {
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 2,
  },
};

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Rezotto',
//   'Pasta',
//   'Pizza',
//   '12',
// ]);

// const user = {
//   name: 'Tema',
//   age: 18,
// };

// const orderObject = new Set(Object.values(user));
// orderObject.add(user);
// console.log(orderSet);
// console.log(new Set('Jonnas'));
// console.log(orderObject);
// // console.log(...new Set(orderSet));

// // const rest = new Map();

const gameEvent = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1.

const events = [...new Set(gameEvent.values())];
console.log(events);

//2.
gameEvent.delete(64);

//3.
const time = [...gameEvent.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvent.size} minutes}`
);

//4.
for (const [min, event] of gameEvent) {
  const half = min <= 45 ? 'First' : 'Second';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(...plane);
