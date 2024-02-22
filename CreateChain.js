// Create a chain of array methods (`map`, `filter`, `reduce`, `etc`,) to transform 
//an Array of string into a single concatenated string with a speific condition

const words = [`bmw`, `bugati` , `aulto`, `mehran`,`date`];
const result = words.filter(words => words.length > 4);
console.log(result);
const wordMap = result.map(word => word.toUpperCase());
console.log(wordMap);
const wordReduce = wordMap.reduce((str, word)=> str +`-`+ word);
console.log(wordReduce);