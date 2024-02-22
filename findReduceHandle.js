//How would you handle potential errors when array methods like `find` or `reduce`.
//Provide an example of error handling in such a scenario.

//Example
const arr = [1,23,4,5,6,7,89,75,8];
const targvalue = 5;
let check = true;
const findvalue = arr.find((value)=>{
    return value === targvalue;
})
if(findvalue !== true){
    console.log("Vlue Found in Giving Array")
}
else{
    console.log("Vlue Not Found in Giving Array")
}