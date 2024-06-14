class maxHeap {
    constructor () {
        this.arr = [];
    }

    upheapify(i) {
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

    insert(data) {
        this.arr.push(data);
        this.upheapify(this.arr.length - 1);
    }
}