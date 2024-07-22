// Method 1 to build an object

var table = {
    legs : 3,
    color: "Brown",
    type: "Wooden",
    price: "$50"
}

console.log(table);
console.log(table.legs);


// method 2 to build an object : The Dot Notation

var table2 = {}

table2.color = 'White';
table2.type = 'Plastic';
table2.legs = 4;
table2.price = "$30";

console.log(table2);


// The Brackets Notation

var house = {}

house["rooms"] = 4;
house["color"] = "blue";
house["price"] = 12345000;

console.log(house);