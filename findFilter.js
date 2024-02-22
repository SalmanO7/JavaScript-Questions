//How does the `find` method differ from `filter`? giving using `find` is more appropriate than `filter`.

//Answer
// Filter() returns an array containing the element that satisfies the condition,
// but find() returns the element itself that satisfies the condition.
const nmbrs = [1,2,3,4,5,6,7];
const filtNmbr = nmbrs.filter(nmbr => nmbr >3);
console.log(filtNmbr)
console.log(nmbrs)
const findNmbr = nmbrs.find(nmbr=> nmbr >3);
console.log(findNmbr)


