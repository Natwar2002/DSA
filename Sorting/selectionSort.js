function selectionSort (arr) {
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i + 1; j < n; j++) {
            if(arr[min] > arr[j]) {
                min = j;
            }
        }
        if(min != i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    // for (let i = 0; i < n - 1; i++) {
    //     let minIndex = findMinElementIndex(arr, i);
    //     if (minIndex !== i) {
    //         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    //     }
    // } 
}

// function findMinElementIndex (arr, i) {
//     let minElementIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//         if(arr[j] < arr[minElementIndex]) {
//             minElementIndex = j;
//         }
//     }
//     return minElementIndex;
// }

let arr = [5,6,7,8,1];
selectionSort(arr);
console.log(arr);