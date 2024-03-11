function selectionSort (arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = findMinElementIndex(arr, i);
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
}

function findMinElementIndex (arr, i) {
    let minElementIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
        if(arr[j] < arr[minElementIndex]) {
            minElementIndex = j;
        }
    }
    return minElementIndex;
}

let arr = [2,42,43,3,2,2,424,4];
selectionSort(arr);
console.log(arr);