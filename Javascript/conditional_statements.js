// if else

var result = 50;

if(result > 40){
    console.log('You passed the test');
} else {
    console.log('You did not pass the test');
}


// if, else-if, else

var place = 'first';

if(place == 'first'){
    console.log('Gold');
} else if (place == 'second') {
    console.log('Silver');
} else if (place == 'third'){
    console.log('Bronze');
} else {
    console.log('No Medal');
}


// switch statement

var place = 'second';

switch(place) {
    case 'first' :
        console.log('Gold');
        break;
    case 'second' :
        console.log('Silver');
        break;
    case 'third':
        console.log('Bronze');
        break;
    default :
        console.log('No medal');
}


// Exercise

// if-else

var age = 64;

if (age >= 65) {
    console.log('You get your income from pension.');
} else if (age < 65 && age >= 18) {
    console.log('Each month you get a salary.');
} else if (age < 18 && age > 0) {
    console.log('You get an allowance.');
} else {
    console.log('The value of the age is incorrect.');
}

// switch statement

var day = "Sunday";
switch(day) {
    case 'Monday':
        console.log('Go to work');
        break;
    case 'Tuesday':
        console.log('Go to college');
        break;
    case 'Wednesday':
        console.log('Go to gym');
        break;
    case 'Thursday':
        console.log('Go to watch a movie');
        break;
    case 'Friday':
        console.log('Go to swimming');
        break;
    case 'Saturday':
        console.log('Go to eat out');
        break;
    case 'Sunday':
        console.log('Sleep all day');
        break;
    default:
        console.log('There is no such day');
}