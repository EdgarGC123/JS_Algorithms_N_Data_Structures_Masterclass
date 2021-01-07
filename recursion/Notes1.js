//What is a recursion
//a function that calls itself. 

//why do we care. 
// it's used everywhere.

//2 Essential parts of a recursive function!
/*
Base Case - something to end with. to stop the recursion.
Different Input - keep going until something is different, such as an empty array.
*/

//EXAMPLE: Sum of Range (Iterative) 
function sumRange(num){
    if(num<=0){
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

//EXAMPLE: Sum of Range (Recursively) 
function sumRange(num){
    if(num===1) return 1;
    return num + sumRange(num-1)
}

//EXAMPLE: Factorial (Iterative) 
function factorial (num){
    let total = 1;
    for(let i=num; i>0; i--){
        total*=1
    }
}
//EXAMPLE: Factorial (Recursively) 
function factorial(num){
    if(num===1) return 1;
    return num * factorial(num-1);
}
//====================================================================================================
// Common Recursion Pitfalls


//Where things can go wrong
/*
no base case
forgetting to return or returning the wrong thing
stack overflow
*/

//====================================================================================================

//Helper Method Recursion js file

function collectOddValues(arr){
    let result = [];

    function helper(helperInput){
        if(helperInput.length===0){
            return;
        }
        if(helperInput[0]){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }

    return result;
}

//====================================================================================================
