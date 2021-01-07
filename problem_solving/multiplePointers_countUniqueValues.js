function countUniqueValues2(arr){
    if(arr.length < 2){
        return arr.length;
    }
    for(let i=0, j=1; j<arr.length; j++){
        if(arr[i]!==arr[j]){
            arr[++i] = arr[j];
        }
        if(j===arr.length-1){
            return i+1;
        }
    }
}

console.log(countUniqueValues2([1,1,1,1,1,2]))//2
console.log(countUniqueValues2([1,2,3,4,4,4,7,7,12,12,13])) //7
console.log(countUniqueValues2([]))//0
console.log(countUniqueValues2([-2,-1,-1,0,1]))//4