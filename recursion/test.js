// function fib(n){
//     function helper(p, c){
//         if(n<=0) return c;
//         let t = p+c;
//         n--;
//         return helper(c,t);
//     }
//     n-=2;
//     return helper(1, 1)
//   }
//   console.log(fib(4));



// function reverse(w){
//     // add whatever parameters you deem necessary - good luck!
//     if(w.length ===1) return w;
//     let lastLetter = w.pop();
//     return lastLetter + reverse(w);
//   }

// //   reverse('test') // 'emosewa'

// let word = "test"
// console.log(word[word.length-1]);
//====================================================================================================
// function flatten(arr){
//     if(arr.length ===0) return [];
//     let newArr = []
//     if(Number.isFinite(arr[0])){
//         newArr.push(arr[0])
//     }else{
//         newArr = flatten(arr[0]);
//     }
//     return newArr.concat(flatten(arr.splice(1)))
// }
  
// console.log ( flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
// console.log( flatten( [[1],[2],[3]] ) ) // [1,2,3]
// console.log( flatten( [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]] )) // [1,2,3]


//====================================================================================================

// function nestedEvenSum(obj){
//     if(Object.keys(obj).length===0) return 0;
//     total = 0;
//     for(key in obj){
//         // console.log("TESTING: ", obj[key], " that is typeof: ", typeof(obj[key]) )
//         if(typeof(obj[key])==='object'){
//             total += nestedEvenSum(obj[key])
//         }else if(typeof(obj[key]) === 'number'){
//             total += obj[key]
//         }
//     }
//     return total;
// }


// var obj1 = {
//     outer: 2,
//     obj: {
//       inner: 2,
//       otherObj: {
//         superInner: 2,
//         notANumber: true,
//         alsoNotANumber: "yup"
//       }
//     }
//   }
//   var obj2 = {
//     a: 2,
//     b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//     c: {c: {c: 2}, cc: 'ball', ccc: 5},
//     d: 1,
//     e: {e: {e: 2}, ee: 'car'}
//   };
  
// // //   console.log(typeof(obj1['outer']))
// console.log(nestedEvenSum(obj1));
// console.log(nestedEvenSum(obj2));

//====================================================================================================

function stringifyNumbers(obj){
    if(Object.keys(obj).length === 0) return [];
    for (let val of Object.values(obj)){
        if(typeof(val) === 'number'){
            // console.log("prior to change: ", val , " typeof: ", typeof(val))
            val = val.toString();
            // console.log("after change: ", val , " typeof: ", typeof(val))
        }else if(typeof(val) === 'object'){
            val = stringifyNumbers(val)
        }
    }
    return obj;
}


function stringifyNumbers2(obj){
    let obj2 = {}
    for (let key in obj){
        if(typeof(obj[key]) === 'number'){
            // console.log("prior to change: ", obj[key] , " typeof: ", typeof(obj[key]))
            obj2[key] = `${obj[key]}`// this isn't considered correct: val.toString()
            // console.log("after change: ", obj[key] , " typeof: ", typeof(obj[key]))
        }else if(typeof(obj[key]) === 'object'){
            obj2[key] = stringifyNumbers(obj[key])
        }
    }
    return obj2;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
// console.log(obj);
// console.log( stringifyNumbers(obj) )
console.log( stringifyNumbers2(obj) )

//====================================================================================================
// const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }

// function collectStrings(o){
//     // if(Object.keys(o).length ===0) return [];
//     let str = [];
//     for(let val of Object.values(o)){
//         if(typeof(val)=== 'string'){
//             str.push(val);
//         }else if(typeof(val) === 'object'){
//             console.log("we've determined a nested obj of: ", val)
//             str = str.concat(collectStrings(val));
//             console.log("after returning from sub-obj, str: ", str)
//         }
//     }
//     console.log("RETURNING: ", str)
//     return str;
// }

// final = collectStrings(obj) // ["foo", "bar", "baz"])
// console.log("FINAL: ", final)