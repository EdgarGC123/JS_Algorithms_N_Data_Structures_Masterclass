// function isSubsequence(s1,s2){
//     let  l1=0, l2=0;
//     while(l2<s2.length){
//         if(s1[l1] === s2[l2]){
//             if(l1==s1.length-1){
//                 return true;
//             }
//             l1++;
//             l2++;
//         }else{
//             l2++;
//         }
//     }
//     return false; 
// }

function isSubsequence(s1,s2){
    let  l1=0, l2=0;
    for(let l2 = 0; l2<s2.length; l2++){
        if(s1[l1] === s2[l2]){
            if(l1==s1.length-1){
                return true;
            }
            l1++;
        }
    }
    return false; 
}


console.log( isSubsequence('hello', 'hello world'));//true;
console.log( isSubsequence('sing', 'sting'));//true;
console.log( isSubsequence('abc', 'abracadabra'));//true;
console.log( isSubsequence('abc', 'acb'));//false;
