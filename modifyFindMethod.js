// Modify the "find" method to handle the scenario 
// where the desired element is not found, returning a custom defualt object instead.

const array = [
    {id: 1, name:"salman"},
    {id: 2, name:"asad"},
    {id: 3, name:"khan"},
    {id: 4, name:"Ai"}
];

const findid = (arr, id, defaultValue)=>{
    const result = arr.find(item => item.id === id);
    return result !== undefined? result: defaultValue;
};
const foundPerson = findid(array,2,{id:-1,name:"not fuond"});
console.log(foundPerson)

