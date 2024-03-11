// UpperBound = first value greater than X.

function upperBound (arr, x) {
    let n = arr.length;
    let lo = 0;
    let hi = n - 1;
    let ans = n;
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if (arr[mid] > x) {
            ans = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return ans;
}

let arr = [1,2,3,4,5];
console.log(upperBound(arr, 2));