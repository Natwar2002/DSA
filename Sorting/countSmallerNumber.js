var countSmaller = function (nums) {
    let n = nums.length;
    let result = new Array(n).fill(0);
    let arr = nums.map((val, idx) => ({val, idx}));
    countHelper(arr, 0, nums.length - 1, result);
    return result;
};

var countHelper = function (arr, start, end, result) {
    if (start === end) {
        return [arr[start]];
    }

    let mid = Math.floor((start + end) / 2);
    let left = countHelper(arr, start, mid, result);
    let right = countHelper(arr, mid + 1, result);

    return mergeSortCount(left, right, result);
};

var mergeSortCount = function (left, right, result) {
    let m = left.length, n = right.length;
    let i = 0, j = 0, k = 0, count = 0;
    let sorted = [];
    while (i < m && j < n) {
        if(left[i].val <= right[j].val) {
            result[left[i]] += count;
            sorted[k++] = left[i++];
        } else {
            count++;
            sorted[k++] = right[j++];
        }
    }

    while(i < m) {
        result[left[i]] += count;
        sorted[k++] = left[i++];
    }

    while(j < n) {
        count++;
    }
}