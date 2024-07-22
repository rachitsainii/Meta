// Spread Operator


// Join two arrays.
const fruits = ['apple', 'pear', 'plum'];
const berries = ['strawberry', 'blueberry'];

const fruitsAndBerries = [...fruits, ...berries];
console.log(fruitsAndBerries);

// Join two objects
const flying = {wings : 2};
const car = {wheels : 4};
const flyingCar = {...flying, ...car};
console.log(flyingCar);

// Add new members without using the push method.
let veggies = ['spinach', 'carrot'];
veggies = [...veggies, 'beetroot', 'onion'];
console.log(veggies);

// Convert a string to an array using the spread op
let string = "Hello";
let array = [...string];
console.log(array);