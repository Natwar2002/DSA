var searchInRotatedArray = function (nums, target) {
    let lo = 0, hi = nums.length - 1;
    while (lo <= hi) {
        let mid = lo + Math.floor((hi-lo)/2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] >= nums[lo]) {
            if (target < nums[mid] && target >= nums[lo]) {
                hi = mid - 1;
            } else lo = mid + 1;
        } else {
            if (target > nums[mid] && target <= nums[hi]) {
                lo = mid + 1;
            } else hi = mid - 1;
        }
    }
    return -1;
}

let nums = [4,5,6,7,0,1,2], target = 2;
console.log(searchInRotatedArray(nums, target));