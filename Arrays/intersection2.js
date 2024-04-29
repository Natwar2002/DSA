var intersection2 = function(nums1, nums2) {
    let mp = {};
    for(let i = 0; i < nums1.length; i++) {
        if(mp[nums1[i]]) {
            mp[nums1[i]] += 1;
        } else {
            mp[nums1[i]] = 1;
        }
    }
    let res = [];
    for(let i = 0; i < nums2.length; i++) {
        if(mp[nums2[i]] > 0) {
            res.push(nums2[i]);
            mp[nums2[i]] -= 1;
        }
    }
    return res;
}

let nums1 = [1,2,2,1], nums2 = [2,2];
console.log(intersection2(nums1, nums2));