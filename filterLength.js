// Take an array of string, filter out the ones with a length less than 5,
// and then capitalize the remaining strings using the `map` method.

//Example

const people=["ali", "salman", "khan" ,"asad" , "adil" , "Faizan"];

const itemUpper = people.filter(x => x.length <  5);
const upper = itemUpper.map(khan=> khan.toUpperCase() );

console.log(upper)