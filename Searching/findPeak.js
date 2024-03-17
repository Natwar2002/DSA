var peak = function (nums) {
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
}