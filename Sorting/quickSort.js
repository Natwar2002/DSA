function partition (arr, start, end) {
    let pivotIdx = Math.floor(Math.random() * (end - start) + start);
    let pivot = arr[pivotIdx];
    [arr[end], arr[pivotIdx]] = [arr[pivotIdx], arr[end]];
    let i = start;
    for (let j = start; j < end; j++) {
        if(arr[j] <= pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[end]] = [arr[end], arr[i]];
    return i;
}


function quickSort (arr, start, end) {
    if (start < end) {
        let pi = partition(arr, start, end);
        quickSort(arr, start, pi - 1);
        quickSort(arr, pi + 1, end);
    }
}

let arr = [9,6,3,1,8,4];
quickSort(arr, 0, arr.length-1);
console.log(arr);