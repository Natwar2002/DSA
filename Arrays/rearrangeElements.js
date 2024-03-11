// You've given an array of size n with all integers. apart from that ther's a value p in the array. you need to rearrange the array such that all the elements less than p goes to the left of p and remaining to the right

function rearrangeElements (arr, p) {
    let n = arr.length;
    let i = 0;
    for(let j = 0; j < n; j++) {
        if(arr[j] < p) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        } 
        if(arr[j] == p) {
            [arr[n-1], arr[j]] = [arr[j], arr[n-1]]; 
        }
    }
    [arr[n-1], arr[i]] = [arr[i], arr[n-1]];
}

let arr = [9,6,3,1,4,8];
rearrangeElements(arr, 4);
console.log(arr);