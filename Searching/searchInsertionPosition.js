/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let n = nums.length, lo = 0, hi = n - 1, result = n;
    while (lo <= hi){
        let mid = lo + Math.floor((hi - lo) / 2);
        if (nums[mid] >= target) {
            result = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return result;
};

let nums = [1,3,5,6], target = 5;
console.log(searchInsert(nums, target));