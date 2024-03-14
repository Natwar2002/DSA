function recursiveBubbleSort (arr, n) {
    if (n === 1) return arr;

    // One pass of bubble sort to move the largest element to the end
    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }

    return recursiveBubbleSort(arr, n - 1);
}

let arr = [2,34,6,756,3,323,2,12];
console.log(recursiveBubbleSort(arr, arr.length));