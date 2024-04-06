let dp;

var f = function (s1, s2, i, j) {
    
}

var longestCommonSubsequebce = function (text1, text2) {
    dp = new Array(1005);
    for(let i = 0; i < 1005; i++) {
        dp[i] = new Array(1005).fill(-1);
    }
    return f(text1, text2, text1.length - 1, text2.length - 1)
}