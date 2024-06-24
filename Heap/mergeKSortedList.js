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

var mergeKLists = function (lists) {
    let result = new ListNode(123);
    let temp = result;

    let hp = new Heap((a, b) => a.val > b.val);
    
    for(let i = 0; i < lists.length; i++) {
        if(lists[i] !== null) {
            hp.insert(lists[i]);
        }
    }

    while(!hp.isEmpty()) {
        let root = hp.get();

        temp.next = root;
        temp = temp.next;

        hp.remove();

        let nextNode = root.next;
        root.next = null;

        if(nextNode != null) hp.insert(nextNode);
    }
    return result.next;
}