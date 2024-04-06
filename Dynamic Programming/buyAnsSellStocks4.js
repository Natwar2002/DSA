let p, dp;
var f= function (i, k, on) {

};

var maxProfit = function (k, prices) {
    p = prices;
    dp = new Array(1005);
    for(let i = 0; i < 1005; i++) {
        dp[i] = new Array(105);
    }
    for(let i = 0; i < 1005; i++) {
        for(let j = 0; j < 105; j++) {
            dp[i][j] = new Array(2).fill(-1);
        }
    }
    let ans = f(0, k, 0);
    return ans;
};