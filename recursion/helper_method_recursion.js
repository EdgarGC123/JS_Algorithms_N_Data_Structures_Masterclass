function collectOddValues(arr){
    let result = [];

    if(arr.length===0){
        return;
    }
    if(arr[0]%2 !==0){
        result.push(arr[0])
    }

    collectOddValues(arr.slice(1));

    return result;
}