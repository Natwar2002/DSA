/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let maxElement =-1 , totalSum = 0;
    for(let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
        maxElement = Math.max(maxElement, nums[i]);
    }

    let lo = maxElement, hi = totalSum;
    let ans = hi;
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo)/2);
        if(isSumOfKsubArraysIslargest(nums, mid, k)) {
            ans = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return ans;
};

function isSumOfKsubArraysIslargest (nums, mid, k) {
    let sum = 0, count = 1;
    for (let i = 0; i < nums.length; i++) {
        if(sum + nums[i] > mid) {
            count++;
            sum = 0;
        }
        sum += nums[i];
    }
    sum++;
    return count <= k;
}