// Problem no. 88
function mergeTwoSortedArrays (nums1, m, nums2, n) {
    let i = m-1, j = n-1, k = (m + n)-1;
    while (i >= 0 && j >= 0) {
        if(nums1[i] >= nums2[j]) {
            nums1[k] = nums1[i];
            k--;
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
            k--;
        }
    }

    while(i >= 0) {
        nums1[k] = nums1[i];
            k--;
            i--;
    }

    while(j >= 0) {
        nums1[k] = nums2[j];
            j--;
            k--;
    }
}