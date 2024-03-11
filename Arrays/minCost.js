function minCostToRemoveAllElemnets(arr) {
    arr.sort((x,y)=> y - x);
    let n = arr.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }

    let cost = 0;
    for (let i = 0; i < n; i++) {
        cost += sum;
        sum -= arr[i];
    }
    return cost;
}

let arr = [2,4,6];
console.log(minCostToRemoveAllElemnets(arr));