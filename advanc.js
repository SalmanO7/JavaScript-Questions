let arrc = [1,2,3,4,5,,6,7,8,9]
const sumNmbrs = (nmbr)=>{
    return nmbr % 0;
};
// let result = arrc.find(sumNmbrs);
// console.log(result)
const emty = [];
let result = arrc.forEach((nmbr)=>{
if(nmbr >= 2) {
    emty.push(nmbr)}
});
console.log(emty)