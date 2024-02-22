// Given an array of arrays containing nmbers use a 
// combination of array methods to flatten the structure and then calculate the sum of akk the nmbers.

//Example

const arr=[[1,2,3],[3,4,5,6],[8,9,4]];
const flattenArr = arr.reduce((flat, curentarr)=> flat.concat(curentarr), []);
const sumNmbr = flattenArr.reduce((sum,num)=> sum+ num,0);
console.log(sumNmbr)