//LEARNING REDUCE ON YOUTUBE

const numbers = [1, -1, 2, 3];
let sum = 0;
for(let n of numbers){
    sum +=n;
}
console.log(sum)



//=================================

//a = 0, c =1 => a=1;
//a = 1, c=-1 => a=0;
//a = 0, c=2 => a=2;
//a = 2, c=3 => a=5;
// numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// }, 0)

//reduce ( call back function, initial value for accumulator)