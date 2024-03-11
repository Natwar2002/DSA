// var threeSum = function (sortedArray) {
//     sortedArray.sort((a, b) => a - b);

//     let result = [];

//     for (let i = 0; i < sortedArray.length - 3; i++) {
//         if (i > 0 && sortedArray[i] === sortedArray[i - 1]) continue;

//         let j = sortedArray.length - 1;
//         let k = i + 1;

//         while (k < j) {
//             const sum = sortedArray[i] + sortedArray[j] + sortedArray[k];
//             if ( sum === 0) {
//                 result.push([sortedArray[i], sortedArray[j], sortedArray[k]]);
//                 if (sortedArray[k] === sortedArray[k + 1]) k++;
//                 if (sortedArray[j] === sortedArray[j - 1]) j--;
//                 k++;
//                 j--;
//             } else if (sum < 0) {
//                 k++;
//             } else {
//                 j--;
//             }
//         }
//     }
//     return result;
// };

//  -4, -1, -1, 0, 1, 2
//  a + b + c = 0,   a + b = -c

var threeSum = function (nums) {
    let n = nums.length;
    let b = n - 1;
    let i = 0
    let a = i + 1;
    let result = [];
    for (i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums [i - 1]) {
            continue;
        }
        
        while(a < b) {
            if (nums[a] + nums[b] === nums[i]) {
               result.push([nums[i], nums[a], nums[b]]);
               if(arr[a] === arr[a+1]) {
                a++;
               }
               if (arr[b] === arr[b-1]) {
                b--;
               }
               a++;
               b--;
            } else if (nums[a] + nums[b] > nums[i]) {
                b--;
            } else {
                a++
            }
        }
    }
    return result;
} 

console.log(threeSum([-1, 0, 1, 2, -1, -4]));