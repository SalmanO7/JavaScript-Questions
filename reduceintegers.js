// use the `reduce` method to find the total sum of all even numbers in an array of integers.

const nmbr =[1,2,34,5,67,8,9,90,54,3,];
const nmbrReduced = nmbr.reduce((x1, x2)=>{
    return x2 % 2 ===0? x1 + x2 : x1;
} ,0);
 console.log(nmbrReduced, nmbr);