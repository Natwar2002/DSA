function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let element = arr[i];
        let j;
        for (j = i - 1; j >= 0; j--) {
            if (arr[j] > element) {
                arr[j + 1] = arr[j];
            } else {
                // arr[j] <= element;
                break;
            }
        }
        arr[j + 1] = element;
    }
}

let arr = [5, 6, 7, 8, 1];
insertionSort(arr);
console.log(arr);