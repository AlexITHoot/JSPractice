'use strict';

const game = {
  team1:'Bayern Munich',
  team2:'Borrussia Dortmnund',
  players:[
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
      'Lewandowski'
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
      'Gotze'
    ]
  ],
  score:'4:0',
  scored:['Lewandowski','Gnarby','Lewandowski','Muller'],
  date:'Nov 9th, 2037',
  odds:{
    team1:1.33,
    x:3.25,
    team2:6.5
  }
}

//1.
const [players1,players2] = game.players;

//2.
const [gk,...fieldPlayers] = players1;

//3.
const allPlayers = [...players1,...players2];

//4.
const players1Final = [...players1, 'Thiago','Coutinho','Periscic'];

//5.
const {odds:{team1,x:draw,team2}} = game;
console.log(team1,draw,team2);

//6.
const printGoals = function(...players){
  console.log(`${players.length} goals were scored`);
  for(let i =0; i<players.length; i++){
    console.log(players[i]);
  }
  
};

printGoals('Davies','Muller','Lewandowski','Kimmich');
printGoals( 'Sancho','Gotze');
printGoals(...game.scored);

//7.
team1 < team2 && console.log('Team 1 is likely to win') ;  