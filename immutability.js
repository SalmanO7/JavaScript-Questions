// Discuss the importance of immutability when working with array method. 
//demonstrate how you would perform immutable operations using methods like `map` or `filter`.

//Answer
// Immutability filtering makes it easier to reason about your code since you can be confident
// that the state of your data remains unchanged throughout the lifetime of the application.


//Example
const students= [
    {id: 1, name: `Salman`, grade: 99},
    {id: 2, name: `Ahmad`, grade: 83},
    {id: 3, name: `Arsal`, grade: 45},
    {id: 4, name: `Ali`, grade: 79},
    {id: 5, name: `Imran`, grade: 30}

];
const stuMap= students.map(student => ({
    student,
    grade: student.grade +5
}));
//  console.log(students);
//  console.log(stuMap);

const higher = students.filter(student => student.grade> 70);
console.log(students)
console.log(higher)

// console.log(stuMap)


