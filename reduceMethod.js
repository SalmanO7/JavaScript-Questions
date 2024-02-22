//Describe the purpose of the `reduce` method and provide an example 
//where you use it to compute a single value from an array of nmbers

//Answer
//Reduce in javaScript used to reduce an array to a single value 
//by passong a callback functionon each element of the array.

//Example 
const nmbers =[1,2,3,4,5];
 const sum= nmbers.reduce((acc , curr)=> acc + curr, 0);
 console.log(sum)