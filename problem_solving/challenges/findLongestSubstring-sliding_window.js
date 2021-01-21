function findLongestSubstring(arr){
    if(arr.length ==0) return 0;
    let long = 1, sum=1, start=0;
    for(let end=1; end<arr.length; end++){
        for(let test = end-1; test >=start; test--){
            if( arr[test] === arr[end] ){
                long = Math.max(long, sum);
                sum = end - (test+1);
                start = test+1;
                break;
            }
        }
        sum++;
    }
    return Math.max(long,sum);
}

console.log(findLongestSubstring(""));
console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("thisisawesome"));
console.log(findLongestSubstring("thecatinthehat"));
console.log(findLongestSubstring("bbbbbb"));
console.log(findLongestSubstring("longestsubstring"));
console.log(findLongestSubstring("thisishowwedoit"));//15 char's