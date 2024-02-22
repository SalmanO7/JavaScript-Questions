// Sort an array of stings based on their leneths in ascending order. 
// if two strings have the same length, maintain their relative order in the sorted array.

const str=["apple", "salman", "faizan","pakistan", "ali", " asad"];

const sortStr = str.sort((a,b) =>{
    const lengthCompare = a.length - b.length;
    return lengthCompare !== 0? lengthCompare : str.indexOf(a) - str.indexOf(b);
});
console.log(sortStr)

