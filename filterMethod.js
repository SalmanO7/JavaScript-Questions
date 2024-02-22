// Explain the purpose of the `filter` method. Provide an example 
//where you use `filter` to extract elements from an array based on a specific condition.

//Answer
//Filter() method create a new array file that pass a test provided by a function.
//The Filter() method dosen't execute function for empty variables.
//And Filter Method does not change the orignal array.

//Example
const nmbrs=[1,2,3,4,9,10,11,12,23,34,54,23,65,12];
const eveNmbr = nmbrs.filter(nmbr => nmbr % 2 === 0);
console.log(eveNmbr)