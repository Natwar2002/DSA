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

            if(lc < this.arr.length && this.cmp(this.arr[max], this.arr[lc])) {
                max = lc;
            }

            if(rc < this.arr.length && this.cmp(this.arr[max], this.arr[rc])) {
                max = rc;
            }

            if(max != i) {
                [this.arr[max], this.arr[i]] = [this.arr[i], this.arr[max]];
                i = max;
            } else break;
        }
    }

    get() {
        return this.arr[0];
    }
}

class Trip {
    constructor(n, d, v) {
        this.n = n;
        this.d = d;
        this.v = v;
    }
}

var kthSmallestPrimeFraction = function (arr, k) {
    let n = arr.length;
    let hp = new Heap((t1, t2) => t1.v > t2.v);

    for(let i = 0; i < n; i++) {
        hp.insert(new Trip(0, i, arr[0]/arr[i]));
    }

    for(let i = 0; i < k - 1; i++) {
        let el = hp.get();
        hp.remove();

        if(el.n < arr.length - 1) {
            hp.insert(new Trip(el.n+1, el.d, arr[el.n+1]/arr[el.d]));
        }
    }
    return [arr[hp.get().n], arr[hp.get().d]];
}