class maxHeap {
    constructor () {
        this.arr = [];
    }

    upHeapify(i) {
        while(i > 0) {
            let pi = Math.floor(i - 1 / 2);
            if(this.arr[pi] < this.arr[i]) {
                [this.arr[pi], this.arr[i]] = [this.arr[i], this.arr[pi]]
            } else {
                break;
            }
            i = pi;
        }
    }

    insert (data) {
        this.arr.push(data);
        this.upHeapify(this.arr.length - 1);
    }

    downHeapify (i) {
        while(i < this.arr.length - 1) {
            let lc = i*2 + 1;
            let rc = i*2 + 2;
            let max = i;
            if(lc < this.arr.length - 1 && this.arr[lc] > this.arr[max]) max = lc;
            if(rc < this.arr.length - 1 && this.arr[rc] > this.arr[max]) max = rc;
            if(i != max) {
                [this.arr[max], this.arr[i]] = [this.arr[i], this.arr[max]];
            } else break;

            i = max;
        }
    }

    remove () {
        [this.arr[0], this.arr[this.arr.length - 1]] = [this.arr[this.arr.length - 1], this.arr[0]];
        this.arr.pop();
        this.downHeapify(0);
    }

    display() {
        console.log(this.arr);
    }

    root() {
        return this.arr[0];
    }
}

var findKthLargest = function(nums, k) {
    const hp = new maxHeap();
    for(let i = 0; i < nums.length; i++) {
        hp.insert(nums[i]);
    }
    for(let i = 0; i < k - 1; i++) {
        hp.remove();
    }
    return hp.root();
};

let nums = [10, 20, 45, 60, 77, 2, -5, 30, 70];
let k = 3;
console.log(findKthLargest(nums, k));