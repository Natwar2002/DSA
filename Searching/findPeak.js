/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let n = nums.length;
    let lo = 0, hi = n - 1;
    while (lo < hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if (mid === 0) return nums[0] >= nums[1] ? 0 : 1;
        if (mid === hi) return nums[hi-1] >= nums[hi-2] ? hi-1 : hi-2;
        if (nums[mid] > nums[mid+1] && nums[mid] > nums[mid-1]) return mid;
        
        if(nums[mid] < nums[mid+1]) {
            lo = mid + 1;
        } else {
            hi = mid - 1; 
        }
    }
    return lo;
};