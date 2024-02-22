// given an array of object with a `price` property,
//se the `sort` method to arrange them in decending order bsased on their prices.

//Example

const people = [
    {name: "keyboad", price: 78},
    {name: "cables", price: 34},
    {name: " cpu", price: 85},
    {name: "pen", price: 93},
    {name: "mouse", price: 29}
];
const sorted = people.sort((a,b)=>
    b.price-a.price);
    console.log(sorted)
