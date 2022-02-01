'use strict';

// function calcAge(birtrhYear) {
//   const age = 2037 - birtrhYear;

//   function printAge() {
//     let output = `${firstName}! You are ${age}, born in ${birtrhYear}`;
//     console.log(output);

//     if (birtrhYear >= 1981 && birtrhYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Steve';
//       const str = `Oh, and you are a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = 'New Output!!!';
//     }
//     console.log(millenial);
//     console.log(output);
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Alex';
// calcAge(1983);

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Alex';
// let job = 'Front-end developer';
// const year = 1983;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// //Example
// if (numProducts) {
//   deleteShopingCart();
// }
// var numProducts = 10;

// function deleteShopingCart() {
//   console.log('All products deleted!');
// }

// const name1 = {
//   name: 'Tyoma',
//   year: 1989,
//   calcAge: function () {
//     return 2037 - this.year;
//   },
// };

// const name2 = {
//   name: 'Tyoma',
//   year: 1980,
//   calcAge: function () {
//     let year = 2;
//     return 2037 - this.year;
//   },
// };

// console.log(name1.calcAge());

// console.log(name2.calcAge());
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1983);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1980);
// var firstName = 'Serg';

// const user = {
//   firstName: 'Alex',
//   year: 1981,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//     //Solution 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// user.greet();
// user.calcAge();

// const user2 = {
//   name: 'Matilda',
//   year: 2017,
// };

// user2.calcAge = user.calcAge;

// const f = user.calcAge;

//arguments keywords
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   a + b;
// };
// addArrow(2, 5);
// addArrow(2, 5, 8, 12);

// const me = {
//   name: 'Alex',
//   age: 37,
// };
// console.log(me);

// const friend = me;
// friend.age = 20;

// console.log(friend);

//Primitive types
// let lastName = 'Wiliams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// const jesica = {
//   firstName: 'Jesica',
//   lastName: 'Wiliams',
//   age: 27,
// };

// const marriedJesica = jesica;
// marriedJesica.lastName = 'Davis';
// console.log('Before merriage', jesica);
// console.log('After merriage', marriedJesica);

// //Coping objects
// const jesica2 = {
//   firstName: 'Jesica',
//   lastName: 'Wiliams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };
// const jesicaCopy = Object.assign({}, jesica2);
// jesicaCopy.lastName = 'Davis';

// jesicaCopy.family.push('Mary');
// jesicaCopy.family.push('John');

// console.log('Before merriage', jesica2);
// console.log('After merriage', jesicaCopy);

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 enhanced object literals
  openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    time = '20:00',
    address,
    mainIndex = 0,
    starterIndex = 1,
  }) {
    console.log(
      `Order recived ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta width ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
});

restaurant.orderPizza('cheese', 'tomato', 'backon');

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

//WITH option chaining
console.log(restaurant.openingHours.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`Open ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method not exist');

//Arrays

const users = [
  {
    name: 'Jonas',
  },
];

console.log(users[0]?.name ?? 'user array empty');

for (const item of days) {
  console.log(item);
}
for (const item in restaurant) {
  console.log(item, restaurant[item]);
}

console.log(Object.values(restaurant));
console.log(Object.entries(restaurant));

// const ingredients = [
//   prompt("Let's make pasta!Ingredients1?"),
//   prompt('Ingredients2?'),
//   prompt('Ingredients3?'),
//   prompt('Ingredients4?'),
// ];

// restaurant.orderPasta(...ingredients);

// const newRestaurant = { ...restaurant };
// console.log(newRestaurant);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// //Join 2 arrays
// const joinArrays = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(joinArrays);

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variebles
// // let a = 111;
// // let b = 999;
// // const obj = { a: 23, b: 7, c: 14 };

// // ({ a, b } = obj);

// // console.log(a, b);

// //Nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// //Destructuring Arrays
// // const arr = [2, 3, 4, 5, 6, 7];

// // const [a, b, ...c] = arr;

// // console.log(a, b, c);

// // const [first, second] = restaurant.categories;
// // console.log(first, second);

// // console.log(restaurant.order(1, 1));

// // 1) Destructuring

// //SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// //REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizzaz, , risoto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizzaz, risoto, otherFood);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// //Nullish:null and undefined
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];

// console.log(menus);

// for (const item of menus.entries()) {
//   console.log(item);
//   console.log(`${item[0]}: ${item[1]}`);
// }

const user = {
  name: 'Alex',
  age: 24,
};

console.log();

// const newUser = new Map(user);
// console.log(newUser);
// const rest = new Map();
// rest.set('name', 'Clasico Italiano');
// rest.set('country', 'Italy').set('open', 10).set('close', 22);
// console.log(rest);

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
for (const [key, item] of Object.entries(user)) {
  console.log(`${key}:${item}`);
}
