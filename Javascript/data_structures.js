// Some data structures : Objects, Arrays, Map, Set


// I Array - Some built in methods

// 1.  forEach()

const fruits = ["kiwi", "apple", "mango", "pear"];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`);
}

fruits.forEach(appendIndex);



// 2. filter

const nums = [0,10,20,30,40,50];
var x = nums.filter(function(num) {
    return num > 20;
})

console.log(x);


// 3. map

var output = [0,10,20,30,40,50].map(function(num) {
    return num / 10;
})
console.log(output);


// II - Objects 

// Convert objects to arrays

const result = [];
const drone = {
    speed : 100,
    color : 'yellow'
}

const droneKeys = Object.keys(drone);
droneKeys.forEach(function(key){
    result.push(key, drone[key]);
})

console.log(result);



// Maps

let bestBoxers = new Map();
bestBoxers.set(1, "Champion!");
bestBoxers.set(2, "The runner up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

console.log(bestBoxers.get(1));

// Sets

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);



