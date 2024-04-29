var intersection = function(nums1, nums2)  {
    // let ans = [];
    // for(let i = 0; i < nums1.length - 1; i++) {
    //     for(let j = 0; j < nums2.length - 1; j++) {
    //         if(nums1[i] == nums2[j]) {
    //             if(! ans.includes(nums1[i])) {
    //                 ans.push(nums1[i]);
    //             }
    //         }
    //     }
    // }
    // return ans;

    let s1 = new Set(nums1);
    let s2 = new Set();
    for(let i = 0; i < nums2.length; i++) {
        if(s1.has(nums2[i])) s2.add(nums2[i]);
    }
    return Array.from(s2);
}

let nums1 = [4,9,5], nums2 = [9,4,9,8,4];
console.log(intersection(nums1, nums2));