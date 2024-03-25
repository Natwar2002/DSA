let dp;
function f (n) {
    if (n == 0 || n == 1 || n == 2) return n;
    if (dp[n] != -1) return dp[n];

    let singleWay = f(n-1);
    let pairedWay = (n-1) * f(n-2);
    return dp[n] = singleWay + pairedWay;
}

let n = 4;
dp = Array(n+1).fill(-1);
console.log(f(n));