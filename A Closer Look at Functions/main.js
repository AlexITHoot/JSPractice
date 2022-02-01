'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a set on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(234, 'Alex P');
lufthansa.book(567, 'John Doe');
// console.log(lufthansa);
// console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(123, 'Nick Alonso');
book.call(eurowings, 111, 'Jonhe Walker');
console.log(eurowings);

book.call(lufthansa, 777, 'Jack Daniels');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Line',
  iataCode: 'SA',
  bookings: [],
};

book.call(swiss, 987, 'Jim Beam');

const flightData = [583, "william Lawson's"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);
