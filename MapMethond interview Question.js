// how does the `map` method work in javaScript, 
//and can you provide an example of when you might use it to manipulate an Array of objects?

//Answer
//Map() is a method of the array object. It creates a new array by calling a function 
//on every element of the orignal array and storing the reasluts in anew array.

const worker =[
    {id: 1, name: `Ahmad`},
    {id: 2, name: `Sammad`},
    {id: 3, name: `Faizan`}
]
const names = worker.map(person => person.name);
console.log(names);