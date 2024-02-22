// implement a function that takes an array of object with "age" properties 
// and returns an array of those who are adults (age 18 and above) using the "filter" method.

//Example
const people=[
    {name: "salman",  age: 20},
    {name: "asad",  age: 23},
    {name: "ahmad",  age: 12},
    {name: "faizan",  age: 18},
    {name: "Ali",  age: 11},
];
function Adults(people) {
    return people.filter(person => person.age>= 18);
}
const linsens = Adults(people);
console.log(linsens)