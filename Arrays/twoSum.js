// var twoSum = function (nums, target) {
//     let n = nums.length;
//     for(let i = 0; i < n - 1; i++){
//         for(let j = i + 1; j < n; j++){
//             if(nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// }


// Hashing :
var twoSum = function (nums, target) {
    let hashTable = {};
    for(let i = 0; i < nums.length; i++) {
        if(hashTable[target - nums[i]] != undefined) {
            return [hashTable[target - nums[i]], i];
        } else {
            hashTable[nums[i]] = i;
        }
    }
};

console.log(twoSum([2,7,11,12], 9));