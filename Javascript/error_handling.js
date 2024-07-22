// try {
//     console.log(c+d);
// } catch (err){
//     console.log(err);
// }


// try {
//     throw new Error();
// } catch(err) {
//     console.log(err);
// }
// console.log('This line now runs');

// throw new ReferenceError();

function addTwoNums(a, b) {
    try {
        if(typeof(a) != 'number'){
            throw new ReferenceError('the first argument is not a number');
        } else if(typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number');
        } else {
            console.log(a+b);
        }
    } catch(err) {
        console.log("Error!", err);
    }  
}

addTwoNums(5, "5");
console.log("It still works!");