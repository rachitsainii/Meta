// For loop

for (var i = 1; i < 5; i++){
    console.log(i);
}


// While loop

var i = 10;

while (i > 0){
    console.log(i);
    i--;
}

console.log('--------------------------');

// Exercise

// 1. 

for (var i = 1; i <= 5; i++){
    console.log(i);
}
console.log('Counting completed!');

console.log('--------------------------');

// 2. 

for(var i = 5; i > 0; i--){
    console.log(i);
}
console.log('Countdown finished!');
console.log('--------------------------');

// 3. 

var i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
console.log('Counting completed!');
console.log('--------------------------');

// 4. 
var i = 5; 
while(i > 0) {
    console.log(i);
    i--;
}
console.log('Countdown finished!');
console.log('--------------------------');

// 5. 

var year = 2018;
while (year <= 2022){
    console.log(year);
    year++;
}
console.log('--------------------------');

// Nested Loops Exercises

// Exercise 1
for( var i = 1; i<=10; i++){
    if( i == 1){
        console.log('Gold Medal');
    } else if (i == 2){
        console.log('Silver Medal');
    } else if (i == 3){
        console.log('Bronze Medal');
    } else {
        console.log(i);
    }
}
console.log('--------------------------');

// Exercise 2

for(var i = 1; i <= 10; i++){
    switch(i){
        case 1:
            console.log('Gold Medal');
            break;
        case 2:
            console.log('Silver Medal');
            break;
        case 3:
            console.log('Bronze Medal');
            break;
        default:
            console.log(i);
    }
}