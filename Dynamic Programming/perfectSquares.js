let c;
let dp;

var f = function (n) {
    // if(n < 0) return Number.MAX_SAFE_INTEGER;
    if(n === 0) return 0;
    if(dp[n] != -1) return dp[n];

    let ans = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < c.length; i++) {
        if(n >= c[i]) {
            ans = Math.min(ans, f(n-c[i]));
        } else {
            break;
        }
    }

    if(ans === Number.MAX_SAFE_INTEGER) return dp[n] = Number.MAX_SAFE_INTEGER;
    return dp[n] = 1 + ans;
};

var numSquares = function(n) {
    c = Array(n+1);
    let j = 0;
    for (let i = 1; i*i <= n; i++) {
        c[j] = i*i;
        j++;
    }
    dp = Array(n+1).fill(-1);
    return f(n);
};

let n = 16;
console.log(numSquares(n));