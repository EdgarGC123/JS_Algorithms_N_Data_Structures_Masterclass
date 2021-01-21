/********** Frequency Counter **********/

// function areThereDuplicates() {
//     let myArgs = {}
//     for(let val of Object.values(arguments)){
//         if(!myArgs[val]){
//             myArgs[val] =1;
//         }else{
//             return true;
//         }
//     }
//     return false;
// }

// function areThereDuplicates() {
//     let myArgs = {}
//     for(let key in arguments){
//         if(!myArgs[arguments[key]]){
//             myArgs[arguments[key]] =1;
//         }else{
//             return true;
//         }
//     }
//     return false;
// }


/********** Multiple Pointers **********/

// function areThereDuplicates(...args) {
//     args.sort( (a,b)=> a>b);
//     for(let i=0; i<args.length-1; i++){
//         if(args[i] === args[i+1]){
//             return true
//         }
//     }
//     return false;
// }



/********** Multiple Pointers Solution **********/
function areThereDuplicates(...args) {
    // Two pointers
    args.sort();
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }

console.log(areThereDuplicates(1,2,3))//false
console.log(areThereDuplicates(1,2,2))//true
console.log(areThereDuplicates('a','b','c','a'))//true

/********** Extra Tests **********/
console.log(areThereDuplicates(1,9,3,4,7,10,2))//false
console.log(areThereDuplicates(1,2,3,4,9,5,6,7,8,9))//true