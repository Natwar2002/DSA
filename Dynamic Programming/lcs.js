let dp;

var f = function (s1, s2, i, j) {
    if(i == -1 || j == -1) return 0;
    if(dp[i][j] != -1) return dp[i][j];
    if(s1[i] == s2[j]) {
        return dp[i][j] = 1 + f(s1, s2, i-1, j-1);
    } else {
        return dp[i][j] = Math.max(f(s1, s2, i-1, j), f(s1, s2, i, j-1));
    }
}

var longestCommonSubsequebce = function (text1, text2) {
    dp = new Array(1005);
    for(let i = 0; i < 1005; i++) {
        dp[i] = new Array(1005).fill(-1);
    }
    return f(text1, text2, text1.length - 1, text2.length - 1)
}

