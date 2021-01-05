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



*/