var findPeakElement = function (nums) {
    let n = nums.length;
    let lo = 0, hi = n - 1;
    if(n == 1) return 0;
    while (lo < hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if (mid === 0) return nums[0] >= nums[1] ? 0 : 1;
        if (nums[mid] > nums[mid+1] && nums[mid] > nums[mid-1]) return mid;

        if(nums[mid] < nums[mid+1]) {
            lo = mid + 1;
        } else {
            hi = mid - 1; 
        }
    }
    return lo;
};


/*var peak = function (nums) {
    let n = nums.length;
    // let ans = -1;
    let lo = 0, hi = n - 1;
    while (lo <= hi) {
        let mid = lo + Math.flooe((hi - lo) / 2);
        if (nums[mid] < nums[mid+1] && nums[mid] > nums[mid-1]) return mid;
        if (nums[mid] < n - 1 && nums[mid] < nums[mid+1]) {
            lo = mid + 1;
        } else {
            if (mid === 0 || nums[mid] > nums[mid - 1]) return mid;
            hi = mid - 1;
        }
    }
}; */