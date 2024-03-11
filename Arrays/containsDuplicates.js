var containsDuplicate = function(nums) {
    let mp = {};

    for( let i = 0; i < nums.length; i++) {
        if (mp[nums[i]]) {
            return false
        } else {
            mp[nums[i]] = 1;
        }
    }
    return true;
};

console.log(containsDuplicate([1,2,3,4,5]));