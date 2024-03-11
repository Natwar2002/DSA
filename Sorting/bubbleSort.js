function bubbleSort (arr) {
    let n = arr.length;

    for(let i = 0; i < n; i++) {
        let isSwapped = false;
        for(let j = 0; j < n - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                isSwapped = true;
            }
        }
        if(isSwapped == false) return;
    }
}

let arr = [5,6,7,8,1];
bubbleSort(arr);
console.log(arr);