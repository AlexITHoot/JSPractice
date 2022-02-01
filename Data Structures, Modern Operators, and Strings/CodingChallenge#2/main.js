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

//1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//2.

const avarageOdds = function () {
  const oddsValue = Object.values(game.odds);
  let sum = 0;
  for (const item of oddsValue) {
    sum += item;
  }
  console.log(sum / oddsValue.length);
};

avarageOdds();

//3.

const { team1, team2, odds } = game;
for (const [team, odd] of Object.entries(odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
  // if (key == 'team1') {
  //   console.log(`Odd of victory ${team1}:${value}`);
  // }
  // else if (key == 'team2'){
  //   console.log(`Odd of victory ${team2}:${value}`);
  // } else{
  //   console.log(`Odd of draw ${key}:${value}`);
  // };
}

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rezotto',
  'Pasta',
  'Pizza',
  '12',
]);

const user = {
  name: 'Tema',
  age: 18,
};

const orderObject = new Set(Object.values(user));
orderObject.add(user);
console.log(orderSet);
console.log(new Set('Jonnas'));
console.log(orderObject);
// console.log(...new Set(orderSet));

// const rest = new Map();
