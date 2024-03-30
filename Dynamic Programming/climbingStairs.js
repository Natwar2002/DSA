let dp;
var f = function (n) {
    if(n == 0 || n == 1 || n == 2) return n;
    
};

var climbingStairs = function (n) {
    dp = Array(n+1).fill(-1);
    return f(n);
};