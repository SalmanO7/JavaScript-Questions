//Discuss the default behavior of the `sort` method for strings and nmbers.
// How would you use a custom comparison function to sort an array of object by a specific property?

//Answer
//Sort() Method of array instances sorts the elements of an array in place and returns the refrence to the array.
//Default sort order is ascending,

const persons =[
    {name: `Ali` , age: 20},
    {name: `Bilal` , age: 34},
    {name: `Aisahaq` , age: 78},
    {name: `Salman` , age: 17}
];
const sortePersons = persons.sort((a, b)=>a.age-b.age);
console.log(sortePersons)