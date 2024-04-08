"use strict";
let dp = new Array(1001);

var f = function (s, i, j) {
    if(i > j) return 0;
    if(i == j) return 1;
    if(dp[i][j] != -1) return dp[i][j];
    if(s[i] == s[j]) {
        return dp[i][j] = 2 + f(s, i+1, j-1);
    } else {
        return dp[i][j] = Math.max(f(s, i+1, j), f(s, i, j-1));
    }
}
var longestPalindromicSubsequebce = function (s) {
    for(let i = 0; i < 1001; i++) {
        dp[i] = new Array(1001).fill(-1);
    }
    return f(s, 0, s.length);
}

let s = "abbabbabb";
console.log(longestPalindromicSubsequebce(s));