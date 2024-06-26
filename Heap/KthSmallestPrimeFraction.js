class Heap {
    constructor(cmp) {
        this.arr = [];
        this.cmp = cmp;
    }

    insert(data) {
        this.arr.push(data);
        this.upHeapify(this.arr.length - 1);   
    }

    upHeapify(i) {
        while(i > 0) {
            let pi = Math.floor((i-1)/2);
            if(this.cmp(this.arr[pi], this.arr[i])){
                [this.arr[i], this.arr[pi]] = [this.arr[pi], this.arr[i]];

                i = pi;
            } else break;
        }
    }

    remove() {
        [this.arr[0], this.arr[this.arr.length - 1]] = [this.arr[this.arr.length - 1], this.arr[0]];
        this.arr.pop();
        this.downHeapify(0);
    }

    downHeapify(i) {
        while(i < this.arr.length) {
            let lc = (i*2) + 1;
            let rc = (i*2) + 2;
            let max = i;
        }
    }
}