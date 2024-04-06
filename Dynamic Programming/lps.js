let dp = new Array(1001);

var f = function (s, i, j) {

}
var longestPalindromicSubsequebce = function (s) {
    for(let i = 0; i < 1001; i++) {
        dp[i] = new Array(1001).fill(-1);
    }
    return f(s, 0, s.length);
}