/******************** Problem Solving Patterns ********************/

//How Do I Improve?
/*
Devise a plan for solving problems
Master common problem solving patterns
*/


// Some Patterns
/*
-Frequency Counter
-Multiple Pointers
-Sliding Window
-Divide and Conquer
-Dynamic Programming
-Greedy Algorithms
-Backtracking
*/

//====================================================================================================

//Frequency Counters
//this pattern uses objects or sets to collect values/frequencies of values
//this can often avoid the need for nested loops or O(N^2) operations with arrays / strings

//write a function called same, which attempts two arrays. the function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

same([1,2,3], [4,1,9]) //true
same([1,2,3], [1,9]) //false
same([1,2,1], [4,4,1]) //false (must be same frequency)

function same(arr1, arr2){
    if(arr1.length !== arr2.length){//if the length's are different, they aren't the same^2
        return false;
    }
    for(let i=0; i<arr1.length; i++){
        let correctIndex = arr2.indexOf(arr[i] **2);
        if(correctIndex===-1){
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true;
}

function same2(arr1, arr2){
    if(arr1.length !== arr2.length){//if the length's are different, they aren't the same^2
        return false;
    }
    let frequencyCounter1 = {};//empty obj for arr1
    let frequencyCounter2 = {};//empty obj for arr2

    for(let val of arr1){//looping thru arr1
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1//if arr1 val doesn't exist in obj as an el, create that el with a value of 1. otherwise increment that el
    }
    for(let val of arr2){//looping thru arr2
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1//if arr2 val doesn't exist in obj as an el, create that el with a value of 1. otherwise increment that el
    }
    for(let key in frequencyCounter1){//now we're looping thru our first obj
        if(!(key **2 in frequencyCounter2)){//NOT, if el/key multiplied by 2 exists inside second obj
            return false;
        }
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]){//if value (quantity) of key**2 in obj2 does not equal value (quantity) of key in obj1
            return false;
        }
    }
    return true;
}

//====================================================================================================

//Frequency Counter: Anagram Challenge

//given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema formed from iceman. 

validAnagram('','') //true
validAnagram('azz', 'zza') //false
validAnagram('anagram', 'nagaram') //true
validAnagram('rat', 'car') //false
validAnagram('awesome', 'awesom') //false
validAnagram('qwerty', 'qeywrt') //true
validAnagram('textwtisttime','timetwisttext')//true

