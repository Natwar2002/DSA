class MinHeap {
    constructor(){
        this.arr = [];
    }
    insert(data) {
        this.arr.push(data);
        this.upHeapify(this.arr.length-1);
    }

    upHeapify(idx){
        while(idx > 0) {
            let pi = Math.floor((idx - 1)/2);
            if(this.arr[pi] < this.arr[idx]) {
                [this.arr[idx], this.arr[pi]] = [this.arr[pi], this.arr[idx]];
                idx = pi;
            } else break;
        }
    }

    remove(){
        if(this.arr.length == 0) return;
        [this.arr[0], this.arr[this.arr.length - 1]] = [this.arr[this.arr.length - 1], this.arr[0]];
        this.arr.pop();
        this.downHeapify(0);
    }
    downHeapify(idx){
        while(idx < this.arr.length - 1) {
            let l = idx * 2 + 1;
            let r = idx * 2 + 2;
            let max = idx;
            if(this.arr[max] < this.arr[l]) {
                max = l;
            }
        }
    }
}

function heapSort (arr) {
    
}