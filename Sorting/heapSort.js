class Heap {
    constructor (cmp) {
        this.arr = [];
        this.cmp = cmp;
    }

    upHeapify(i) {
        while(i > 0) {
            let pi = Math.floor((i - 1) / 2);
            if(this.cmp(this.arr[pi], this.arr[i])) {
                [this.arr[pi], this.arr[i]] = [this.arr[i], this.arr[pi]];
                i = pi;
            } else {
                break;
            }
        }
    }

    insert (data) {
        this.arr.push(data);
        this.upHeapify(this.arr.length - 1);
    }

    downHeapify (i) {
        while(i < this.arr.length) {
            let lc = i*2 + 1;
            let rc = i*2 + 2;
            let max = i;
            if(lc < this.arr.length && this.cmp(this.arr[max], this.arr[lc])) max = lc;
            if(rc < this.arr.length && this.cmp(this.arr[max], this.arr[rc])) max = rc;
            if(i != max) {
                [this.arr[max], this.arr[i]] = [this.arr[i], this.arr[max]];
                i = max;
            } else break;
        }
    }

    remove () {
        if(this.arr.length == 0) return;
        [this.arr[0], this.arr[this.arr.length - 1]] = [this.arr[this.arr.length - 1], this.arr[0]];
        this.arr.pop();
        this.downHeapify(0);
    }

    root() {
        return this.arr[0];
    }
}

function heapSort (arr) {
    let n = arr.length;
    const hp = new Heap((a, b) => a > b);
    for(let i = 0; i < n; i++) {
        hp.insert(arr[i]);
    }
    for(let i = 0; i < n; i++) {
        arr[i] = hp.root();
        hp.remove();
    }    
}

let arr = [5, 3, 8, 4, 2];
heapSort(arr);
console.log(arr);