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

    isEmpty() {
        return this.arr.length == 0;
    }
    
    display() {
        console.log(this.arr);
    }

    get() {
        return this.arr[0];
    }
}

class Point {
    constructor(xi, yi) {
        this.x = xi;
        this.y = yi;
        this.dist = Math.sqrt((xi * xi) + (yi * yi));
    }
}

var kClosest = function(points, k) {
    let hp = new Heap((pointA, pointB) => {
        return pointA.dist > pointB.dist;
    });

    for(let i = 0; i < points.length; i++) {
        let p = new Point(points[i][0], points[i][1]);
        hp.insert(p);
    }

    let res = [];
    while(k > 0) {
        let val = [hp.get().x, hp.get().y];
        res.push(val);
        hp.remove();
        k--;
    }
    
    return res;
};