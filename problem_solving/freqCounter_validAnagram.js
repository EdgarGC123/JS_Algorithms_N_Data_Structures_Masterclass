/******************** Problem Solving Patterns Cont: Frequency Counter - Valid Anagram ********************/

// function validAnagram(arr1, arr2){
//     // add whatever parameters you deem necessary - good luck!
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     let obj1 = {};
//     let obj2 = {};
//     for(let char of arr1){
//         obj1[char] ? obj1[char]++ : obj1[char] =1;
//     }
//     for(let char of arr2){
//         obj2[char] ? obj2[char]++ : obj2[char] =1;
//     }

//     for(let key in obj1){
//         if(!obj2[key]){
//             return false;
//         }
//         if(obj1[key] !== obj2[key]){
//             return false;
//         }
//     }
//     return true;
//   }

//   console.log(validAnagram('', ''));//true
//   console.log(validAnagram('aaz', 'zza'));//false
//   console.log(validAnagram('anagram', 'nagaram'));//true
//   console.log(validAnagram('rat', 'car'));//false
//   console.log(validAnagram('awesome', 'awesom'));//false
//   console.log(validAnagram('ama', 'ama'));//true
//   console.log(validAnagram('qwerty', 'qeywrt'));//true
//   console.log(validAnagram('texttwisttime', 'timetwisttext'));//true

//   function validAnagram2(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }

//     const lookup = {};

//     for(let i=0; i<arr1.length; i++){
//         let letter = first[i];
//         lookup[letter] ? lookup[letter]++ : lookup[letter] = 1;
//     }

//     for(let i=0; i<arr2.length; i++){
//         let letter = arr2[i];
//         //can't find letter or letter is zero, then it's not an anagram;
//         if(!lookup[letter]){
//             return false;
//         } else{
//             lookup[letter] -=1;
//         }
//     }
//   }




  function validAnagram3(A, B){
    let objA = {};
    let objB = {};
    let ctr = 0;
    for(let char of A){
        objA[char] ? objA[char]++ : objA[char] =1;
    }
    for(let char of B){
        objB[char] ? objB[char]++ : objB[char] =1;
    }

    for(let key in objA){
        if(!objB[key]){
            ctr++;
            continue;
        }
        if(objA[key] !== objB[key]){
            let ad = Math.abs(objA[key] - objB[key])
            ctr+=ad;
        }
    }
    for(let key in objB){
        if(!objA[key]){
            ctr++;
        }
    }
    return ctr;
}
      
console.log(validAnagram3("rather", "harder"))
console.log(validAnagram3("apple", "pear"))
console.log(validAnagram3("lemon", "melon"))
console.log( validAnagram3("sassss", "as") )