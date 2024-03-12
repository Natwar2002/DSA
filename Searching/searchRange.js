function lowerBound (arr, x) {
    let n = arr.length;
    let lo = 0;
    let hi = n-1;
    let result = n;
    while(lo <= hi) {
        let mid = Math.floor((lo+hi)/2);
        if(arr[mid] >= x) {
            result = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return result;
}

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

function searchRange (arr, target) {
    let lb = lowerBound(arr, target);
    if (lb == arr.length || arr[lb] != target) {
        return [-1, -1];
    }

    let ub =  upperBound(arr, target);
    return [lb, ub-1];
}

let arr = [1,2,2,3,4,5];
console.log(searchRange(arr, 2));