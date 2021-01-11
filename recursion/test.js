// function fib(n){
//     function helper(p, c){
//         if(n<=0) return c;
//         let t = p+c;
//         n--;
//         return helper(c,t);
//     }
//     n-=2;
//     return helper(1, 1)
//   }
//   console.log(fib(4));

function reverse(w){
    // add whatever parameters you deem necessary - good luck!
    if(w.length ===1) return w;
    let lastLetter = w.pop();
    return lastLetter + reverse(w);
  }

  reverse('awesome') // 'emosewa'