class Heap {
    constructor (cmp) {
        this.arr = [];
        this.cmp = cmp;
    }

    upHeapify(i) {
        while(i > 0) {
            let pi = Math.floor(i - 1 / 2);
            if(this.cmp(this.arr[pi], this.arr[i])) {
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
            if(lc < this.arr.length - 1 && this.cmp(this.arr[lc], this.arr[max])) max = lc;
            if(rc < this.arr.length - 1 && this.cmp(this.arr[rc], this.arr[max])) max = rc;
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
}

let hp = new Heap((a, b) => a > b);
hp.insert(10);
hp.insert(40);
hp.insert(3);
hp.insert(20);
hp.insert(100);
hp.insert(50);
hp.insert(6);
hp.insert(4);
hp.display();
hp.remove();
hp.display();
hp.remove();
hp.display();