//the question is, how do we determine the best code when we have different approaches to a problem. 

//big O gives us a numerical representation, rather that a great or not good grading system.

//who cares?
//job interviews, it's important to have a precise vocab to talk about how our code performs. 
//working for large companies or working with huge data sets. we need to know how code compares to others. 
//debugging, if there aren't errors but something is slowing it down. it helps us identify inefficient points. 

/********** write a function that calc the sum of all numbers from 1 to a number**********/


//add pt 1
function addUpTo(n){
    let total = 0;
    for(let i=1; i<=n; i++){
        total+=1;
    }
    return total;
}
console.log(addUpTo(100))

// add pt 2
function addUp2(n){
    return n * (n+1) /2;
}
console.log(addUpTo(100))

//which one is better? what does better mean?
// - Faster? - Less Memory Intensive? - More readable?

//Big O Definition:
//formalize fuzzy counting
//it allows us to talk formallya bout how the runtime 

//we say that an algorithm is O( f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

//f(n) could be lenear f(n) = n
//f(n) could be quadratic f(n) = n^2
//f(n) could be 
//f(n) could be




/*
space complexity

primitive's are constant space (boolean, numbers, undefined, null)
strings require O(n) space (where n is  the string length)
reference types are generally O(n) aka array's or objects


====================================================================================================
*/

/********** Understanding how obj and arr work in Big O **********/
//why is it costly to add elements to the beginning of an array

/*
object's work well when you don't need order. quick insertions and removals

Insertion O(1)
Removal O(1)
Searching O(N)
Access O(1)
*/

let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}

//js is able to add and retrieve and remove in constant time. 
/*
Object.keys O(N)
Object.values O(N)
Object.entries O(N)
hasOwnProperty O(1)

*/



// When to use Array's 
/*
when you need order, and need fast access and insertion. 

removal gets complicated

insertion - it depends
removal - it depends
searching - O(N)
access - O(1)
*/

let names = ["Michael", "Melissa", "Andrea"]

// "Michael"  "Melissa"  "Andrea"
//    0          0           0

/* 
accessing a value, with a valid index, is constant time. it goes straight to that point in the array. 

Adding a value at the end like normal is O(1) aka pushing to an array,
but adding at the beginning requires the entire array to re-index everything.

Same thing goes when you are removing from the begining of the array,
this requires the array to be re-indexes. 

push and pop is always faster than shift and unshift


*/









