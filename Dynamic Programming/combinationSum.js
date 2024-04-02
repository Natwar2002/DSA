let dp, arr;

var f = function (target) {
    if (target < 0) return 0;
    if (target === 0) return 1;
    if (dp[target] != -1) return dp[target];

    let result = 0;
    for(let i = 0; i < arr.length; i++) {
        if (target >= arr[i]) {
            result += f(target - arr[i]);
        }
    }
    return dp[target] = result;
};

var combinationSum4 = function(nums, target) {
    dp = Array(target+5).fill(-1);
    arr = nums;
    return f(target);
};

let nums = [1,2,3], target = 4;
console.log(combinationSum4(nums, target));