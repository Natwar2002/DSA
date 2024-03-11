function recursiveSelectionSort (arr, start = 0) {
    if (start >= arr.length) return arr;
    let minIndex = start;

    for(let i = start + 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }

    if (minIndex !== start) {
        [arr[start], arr[minIndex]] = [arr[minIndex], arr[start]];
    }

    return recursiveSelectionSort(arr, start + 1);
}

const arr = [64, 25, 12, 22, 11];
console.log("Original array:", arr);
console.log("Sorted array:", recursiveSelectionSort(arr));