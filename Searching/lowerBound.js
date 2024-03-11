// lowerBound = first value which is greater than or equals to x

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

let arr = [1,2,3,4,5];
console.log(lowerBound(arr, 2));