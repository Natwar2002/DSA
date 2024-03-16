var countSmaller = function (nums) {
    let n = nums.length;
    let result = new Array(n).fill(0);
    let arr = nums.map((val, idx) => ({val, idx}));
    console.log(arr);
    countHelper(arr, 0, arr.length - 1, result);
    return result;
};

var countHelper = function (arr, start, end, result) {
    if (start === end) {
        return [arr[start]];
    }

    let mid = start + Math.floor((end - start) / 2);
    let left = countHelper(arr, start, mid, result);
    let right = countHelper(arr, mid + 1, end, result);
    
    return mergeSortCount(left, right, result);
};

var mergeSortCount = function (left, right, result) {
    let m = left.length, n = right.length;
    let i = 0, j = 0, k = 0, count = 0;
    let sorted = [];
    while (i < m && j < n) {
        if(left[i].val <= right[j].val) {
            result[left[i].idx] += count;
            sorted[k++] = left[i++];
        } else {
            count++;
            sorted[k++] = right[j++];
        }
    }

    while(i < m) {
        result[left[i].idx] += count;
        sorted[k++] = left[i++];
    }

    while(j < n) {
        count++;
        sorted[k++] = right[j++];
    }

    return sorted;
}

let nums = [5,2,6,1];
console.log(countSmaller(nums));