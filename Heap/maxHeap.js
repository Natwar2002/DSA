class maxHeap {
    constructor () {
        this.arr = [];
    }

    upheapify(i) {
        
    }

    insert(data) {
        this.arr.push(data);
        this.upheapify(this.arr.length - 1);
    }
}