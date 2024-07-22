// functional programming

var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, stateTax) {
    return shoes * stateTax;
}

var toPay = totalPrice(shoes, stateTax);
console.log(toPay);



// OOPS paradigm

var purchase1 = {
    shoes : 100,
    stateTax : 1.2,
    totalPrice : function() {
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log('Total Price', calculation);
    }
}

purchase1.totalPrice();


// OOPS2

var purchase2 = {
    shoes : 50,
    stateTax : 1.2,
    totalPrice : function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total Price', calculation);
    }
}

purchase2.totalPrice();