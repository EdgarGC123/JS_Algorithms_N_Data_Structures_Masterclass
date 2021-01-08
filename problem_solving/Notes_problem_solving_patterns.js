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

//EXAMPLE: Naive Solution

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

//Example: Refactored Solution
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

//====================================================================================================

//Frequency Counter - Valid Anagram Challenge js file.

//====================================================================================================

//Multiple Pointers
//Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.
//Very efficient for solving problems with minimal space complexity as well. 

//Write a function called sumZero which accepts a SORTED array of integers. The function should find the first pair where the sum is 0. Return an array that inscludes both values that sum to zero or undefined if a pair does not exist. 

//EXAMPLE: Naive Solution

function sumZero(arr){
    for(let i=0; i<arr.length; j++){ //basic loop thru entire array
        for(let j=i+1; j<arr.length; j++){//basic loop thru entire array starting one ahead
            if(arr[i]+ arr[j]===0){// if the sum is 0
                return [arr[i], arr[j]]
            }
        }
    }
}

//EXAMPLE: Refactored Solution

function sumZero2(arr){
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        let sum = arr[left] + arr[right];
        if(sum===0){
            return[arr[left], arr[right]]
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}

//Note: the examples we're working with are all sorted arrays which is what allows the refactored solution to be highly efficient. otherwise things get more complicated.

//====================================================================================================

//Count Unique Values Challenge

//We aren't starting from the beginning & end towards the middle anymore. 
//We now have 2 pointers going in the same direction.

//write a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

//EXAMPLE: Naive Solution

function countUniqueValues(arr){
    if(arr.length < 2){
        return arr.length
    }
    let count=1;
    for(let i=0, j=1; j<arr.length; i++, j++){
        if(arr[i]!==arr[j]){
            count++;
        }
    }
    return count;
}

//====================================================================================================

//Multiple Pointers - countUniqueValues js file.

//====================================================================================================

//Unique Values Solution

//EXAMPLE: Refactored Solution

function countUniqueValues2(arr){
    if(arr.length < 2){
        return arr.length;
    }
    let i=0
    for(let j=1; j<arr.length; j++){
        if(arr[i]!==arr[j]){
            arr[++i] = arr[j]
        }
    }
    return i+1;
}


//====================================================================================================

//Sliding Window Pattern

//This pattern involves creating a window which can either be an array or number from one position to another. 
//depending on certain conditions, the window either increases or closes (and a new window is created)
// very useful for keeping track of subset of data in an array/string

//write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

//EXAMPLE: Naive Solution
function maxSubarraySum(arr, num){
    if(num > arr.length){
        return null;
    }
    var max = -Infinity;
    for(let i=0; i< arr.length-num + 1; i++){
        temp = 0;
        for(let j=0; j< num; j++){
            temp += arr[i+j];
        }
        if(temp > max){
            max = temp;
        }
    }
    return max;
}