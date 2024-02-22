// Explain the Concept of callback function in the contex of array method. 
// Provide an example of using a callback function with the `map` method.


//Answer
//CallBack function is a function that is passed as an argument to another function
// and is executed after the completion of some operation

//Example
const nmbers =[1,2,3,4,4,6,7];
const callfunc = (nmber) => nmber * nmber;
const squre = nmbers.map(callfunc);

console.log(squre)