function minSubarrayLen(arr, n){
    let min = 0; //this changes uppon finding a true hit
    //the following is setting up for first iteration
    let maxdigit = arr[0];
    let total = arr[0];
    let length = 1;
    if(total >= n) return 1; //if the first one solves it we're done
    //double pointer, adding all values until we get a true hit
    for(let i=0, j=1; j<arr.length; j++){
        total += arr[j];
        length++;
        maxdigit = Math.max(maxdigit, arr[j]);//why didn't this work?
        if(total >=n){//true hit
            if(min ==0){
                min = length;
            } else 
            min = Math.min(min, length)
            total -= (arr[i] + arr[j])
            i++;
            j--;
            length -=2;
        }
    }
    return min;
}

final = minSubarrayLen([2,3,1,2,4,3], 10) //4 is our goal
console.log(final);
