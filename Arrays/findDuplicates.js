/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const ans = [];
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        const x = Math.abs(nums[i]);
        if (nums[x - 1] < 0) {
            ans.push(x);
        }
        nums[x - 1] *= -1;
    }
    return ans;
};

let arr = [4,3,2,7,8,2,3,1];
console.log(findDuplicates(arr));