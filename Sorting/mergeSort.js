function mergeTwoSortedArrays (left, right) {
    let m = left.length;
    let n = right.length;
    let result = new Array(m + n);
    let i = 0, j = 0, k = 0;
    while(i < m && j < n) {
        if (left[i] <= right[j]) {
            result[k] = left[i];
            i++;
            k++;
        } else {
            result[k] = right[j];
            j++; 
            k++;
        } 
    }

    while(i < m) {
        result[k] = left[i];
            k++;
            i++;
    }

    while(j < n) {
        result[k] = right[j];
            k++;
            j++;
    }
    return result;
}

function mergeSortHelper(arr, start, end) {
    if(start === end) {
        // let res = [];
        // res[0] = arr[start];
        // return res;
        return [arr[start]];
    }
    let mid = start + Math.floor((end - start)/2);
    let left = mergeSortHelper(arr, start, mid);
    let right = mergeSortHelper(arr, mid + 1, end);
    return mergeTwoSortedArrays(left, right);
}

function mergeSort(arr){
    return mergeSortHelper(arr, 0, arr.length-1);
}

arr = [3,45,6,7,8,9,0];
console.log(arr);
let res = mergeSort(arr);
console.log(res);