/* var f = function (n) {
    if(n === 0 || n === 1) return n;
    return f(n-1) + f(n-2);
} */

let dp;

function f_bu (n) {
    dp = Array(n+1);
    dp[0] = 0;
    dp[1] = 1;
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
} 

function f (n) {
    if(n === 0 || n === 1) return n;
    if (dp[n] != -1) return dp[n];
    return dp[n] = f(n-1) + f(n-2);
}

var fib = function (n) {
    // dp = Array(n+1).fill(-1);
    return f_bu(n);
}

let n = 10;
console.log(fib(n));