let dp;

function f_bu (n) {
    dp = Array(n+1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;

    for(let i = 3; i <= n; i++) {
       let singleWay = dp[i-1];
       let pairedWay = (i-1) * dp[i-2];
       dp[i] = singleWay + pairedWay; 
    }
    return dp[n];
}



function f (n) {
    if (n == 0 || n == 1 || n == 2) return n;
    if (dp[n] != -1) return dp[n];

    let singleWay = f(n-1);
    let pairedWay = (n-1) * f(n-2);
    return dp[n] = singleWay + pairedWay;
}

let n = 3;
// dp = Array(n+1).fill(-1);
console.log(f_bu(n));