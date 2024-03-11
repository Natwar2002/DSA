function binarySearch (arr, x) {
    let low = 0, hi = arr.length-1;
    while(low <= hi) {
        let mid = Math.floor((low + hi)/2);
        if (arr[mid] == x) {
            return mid;
        } else if (arr[mid] < x) {
            low = mid + 1;
        } else {
            hi = mid -1;
        }
    }
    return -1
}

let arr = [1,2,3,3,5,6,54];
console.log(binarySearch(arr,3));