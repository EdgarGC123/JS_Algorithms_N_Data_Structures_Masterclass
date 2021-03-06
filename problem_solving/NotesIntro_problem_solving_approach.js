/********** Algoritthms and Problem Solving Patterns **********/

/*
Define what an algorithm is
Devis a plan to solve algorithms
Compare and contrast problem solving patterns including frequency counters, two point problems and divide and conquer

Algorithm - a process or set of steps to accomplish a certain task.

how to improve
1 - devise a plan for how to solve problems
2 - Master common problem solving patterns



Problem solving

- understand the problem
- explore concrete examples
- break it down
- solve / simplify
- look back and refactor
*/


//====================================================================================================

//Understand The Problem

/* 
can i restate the problem in my own words?
what are the inputs that go into the problem
what are the outputs that should come from the solution
can the outputs be determined from the inputs (do i have enough info to solve the problem)
How should i label the important pieces of data
*/

//write a function that takes two numbers and returns their sum
function mySum(n, m) {
    return n+m;
}


//====================================================================================================

//Concrete Examples

/*
coming up with examples can help you understand the problem better

examples also provide sanity checks that your eventual solution works how it should

EXPLORE EXAMPLES
start with simple examples
progress to more complex examples
explore empty inputs
explore invalid inputs
*/


//write a function which takes in a string and returns counts of each char in the strong

charCount("aaaa"); //{a:4}
charCount("hello"); //{h:1, e:1, l:2, o:1 }

//====================================================================================================

//Problem Solving
/*
understand the problem
explore concrete examples
break it down (take the steps of the problem and write them down)



explicitly write out the steps you need to take*/

charCount("Your PIN number is 1234!")

function charCount(str){
    //do something
    //return an obj with keys that are lowercase alphanumeric characters in the string; 

}

function charCount(str){
    //make object to return at end
    //loop over string, for each character...
        //if the char is a number/letter AND is a key in obj, add one to couhnt
        //if the char is anumber/letter AND not in object, add it and set value to 1
        //if char is something else (space, period, etc.) don't do anything
    //return object at end
}


//====================================================================================================

//Solve & Simplify
/* you can now solve the problem.
if you can't. solve a simpler problem

Simplify!
find the core difficulty in what you're trying to do
temporarily ingore that difficulty
write a simplified solution
then incorporate that difficulty
*/
function charCount(str){
    //make object to return at end
    var result = {};
    //loop over string, for each character...
    for(var i=0; i<str.length; i++){
        var char = str[i].toLowerCase();
        if(result[char]>0){
            result[char]++
        }else{
            result[char] = 1;
        }
        //if the char is a number/letter AND is a key in obj, add one to couhnt
        //if the char is anumber/letter AND not in object, add it and set value to 1
        //if char is something else (space, period, etc.) don't do anything
    }
    //return object at end
    return result;
}

//====================================================================================================

//Look Back & Refactor
//congrats on solving it, but you're not done!
//try and improve your code. otherwise it's a missed opportunity

/*
Refactoring Questions
-can you check the results?
-can you derive the result differently?
-can you understand it at a glance?
-can you use the result or method for some other problem?
-can you improve the performance of your solution?
-can you think of other ways to refactor?
-how have other people solve this problem?
*/

function charCount(str){
    var result = {};
    for(var i=0; i<str.length; i++){
        var char = str[i].toLowerCase();
        if(/[a-z0-9]/.text(char)){
            if(result[char]>0){
                result[char]++;
            }else{
                result[char] = 1;
            }
        }
    }
    return result;
}