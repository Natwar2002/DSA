var minimizeMax = function(nums, p) {
    nums.sort((a,b) => a - b);
    let n = nums.length;
    let lo = 0, hi = nums[n-1] - nums[0], ans = hi;

    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if (canFormPpairsWithLessThanMid(nums, mid, p)) {
            ans = mid;
            hi = mid - 1;
        } else lo = mid + 1;
    }
    return ans
}

function canFormPpairsWithLessThanMid(nums, mid, p) {
    let count = 0, i = 0;
    while (i < nums.length - 1) {
        if (nums[i+1] - nums [i] <= mid) {
            count++;
            i += 2;
        } else i++;
    }
    return p <= count;
}

let nums = [10,1,2,7,1,3], p = 2;
console.log(minimizeMax(nums, p));