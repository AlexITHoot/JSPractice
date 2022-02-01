'use strict';

// const book = function (flightNum, name) {
//   console.log(
//     `${name} booked a set on ${this.airline} flight ${this.iataCode}${flightNum}`
//   );
//   this.bookings.push({ flight: `${this.iataCode}${flightNum}, name` });
// };

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked a set on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      // flight: `${this.iataCode}${flightNum}`,
      // name: `${name}`,
      flightNum,
      name,
    });
  },
};

lufthansa.book(123, 'Alex P');
lufthansa.book(332, 'John Doe');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(777, 'Red Label');
// book.call(lufthansa, 123, 'Red Label');
// book.call(lufthansa, 234, 'Blue Label');
// book.call(eurowings, 777, 'John Doe');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'SA',
  bookings: [],
};

book.call(swiss, 666, 'Jin Tonic');

//Bind method
// console.log(eurowings);
const bookEW = book.bind(eurowings);
bookEW(333, 'Super Jet');

const bookEW23Name = book.bind(eurowings, 23, 'GoodBoy', 555);
// bookEW23Name();

//With event listeners

lufthansa.planes = 300;

const buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

const salePlane = function () {
  console.log(this);
  this.planes--;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', buyPlane.bind(lufthansa));

document
  .querySelector('.sale')
  .addEventListener('click', salePlane.bind(lufthansa));

//Partial application

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));
