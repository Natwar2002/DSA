let arr;
let dp;

var f = function (i) {
    if (i == 0 || i == 1) return 0;
    if(dp[i] != -1) return dp[i];
    if(arr[i] - arr[i-1] != arr[i-1] - arr[i-2]){
        return dp[i] = 0;
    } else {
        return dp[i] = 1 + f(i-1);
    }
};

function fbu() {
    for(let i = 0; i < arr.length; i++) {
        if (i == 0 || i == 1){
            dp[i] = 0;
        } else {
            if(arr[i] - arr[i-1] != arr[i-1] - arr[i-2]){
                dp[i] = 0;
            } else {
                dp[i] = 1 + dp[i-1];
            }
        }
    }

    let ans = 0;
    for(let i = 0; i < arr.length; i++) {
        ans += dp[i];
    }
    return ans;
};

var numberOfArithmeticSlices = function(nums) {
    arr = nums;
    dp = new Array(5005);
    // dp = Array(5005).fill(-1);
    // let ans = 0;
    // for(let i = 0; i < nums.length; i++) {
    //     ans += f(i);
    // }
    // return ans;
    return fbu();
};

let nums = [1,2,3,4];
console.log(numberOfArithmeticSlices(nums));