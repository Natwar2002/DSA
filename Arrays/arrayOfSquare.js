// var sortedSquares = function(nums) {
//     let i = 0;
//     let result = [];
//     while (i < nums.length) {
//         result.push(nums[i] ** 2);
//         i++
//     }
//     result.sort((a,b) => a-b)
//     return result;
// };

// console.log(sortedSquares([-4,-1,0,3,10]));

var sortedSquares = function(nums) {
    let n = nums.length;
    let result = new Array(n);
    left = 0;
    right = n - 1;
    for(let i = n - 1; i >= 0; i--){
        if(nums[left] **2 < nums[right]**2) {
            result[i] = nums[right]**2;
            right--;
        } else {
            result[i] = nums[left]**2;
            left++;
        }
    }
    return result
}
console.log(sortedSquares([-4,-1,0,3,10]));