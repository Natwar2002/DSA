let dp;
var f = function (n) {
    if(n == 0 || n == 1 || n == 2 || n == 3) return n;
    if(dp[n] !== -1) return dp[n];
    return dp[n] = f(n-1) + f(n-2);
};

var climbingStairs = function (n) {
    dp = Array(n+1).fill(-1);
    return f(n);
};

let n = 4;
console.log(climbingStairs(n));