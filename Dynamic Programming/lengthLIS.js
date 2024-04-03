let arr, dp;
var f = function (i) {
    if(i === 0) return 1;
    let res = 1;
    for(let j = 0; j < i; j++) {
        if(arr[j] < arr[i]) {
            res = Math.max(res, 1 + f(j));
        }
    }
    return res;
}
var lengthOfLIS = function (nums) {
    let ans = Number.MIN_SAFE_INTEGER;
    arr = nums;
    dp = Array(2501).fill(-1);
    for(let i = 0; i < nums.length; i++) {
        ans = Math.max(ans, f(i));
    }
    return ans;
}

let nums =[0,1,0,3,2,3];
console.log(lengthOfLIS(nums));