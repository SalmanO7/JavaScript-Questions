const nmbr =[2,-3,4,-5,6,-8,1,-35,90];
const nmbrPositive = nmbr.reduce((sum,nmbr,item ,arr)=> {
    sum += nmbr;
    return item === arr.length-1 ? sum/ arr.length : sum;
}, 0);
const nmbrAvaerage = Math.round(nmbrPositive * 100) / 100;

console.log(nmbrAvaerage)