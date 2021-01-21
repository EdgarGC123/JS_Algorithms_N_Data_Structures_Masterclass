function sameFrequency(A,B){
    A = A.toString()
    B = B.toString()
    let objA = {};

    for(let val of A){
        objA[val] ? objA[val]++ : objA[val]=1
    }
    for(let val of B){
        if(!objA[val]){
            return false;
        }
        else{
            objA[val]--;
        }
    }
    for(let key in objA){
        if(objA[key] !==0){
            return false;
        }
    }
    return true;
}

console.log(sameFrequency(182,281));//true
console.log(sameFrequency(34,14));//false
console.log(sameFrequency(3589578,5879385));//true
console.log(sameFrequency(22,222));//false