class Heap {
    constructor(cmp) {
        this.arr = [];
        this.cmp = cmp;
    }
    insert(data) {
        this.arr.push(data);
        this.upheapify(this.arr.length - 1);
    }
    upheapify(i) {
        while (i > 0) {
            let pi = Math.floor((i - 1) / 2);
            if (this.cmp(this.arr[pi], this.arr[i])) {
                [this.arr[pi], this.arr[i]] = [this.arr[i], this.arr[pi]];
                i = pi;
            } else break;
        }
    }
    delete() {
        if (this.isEmpty()) return;
        [this.arr[0], this.arr[this.arr.length - 1]] = [this.arr[this.arr.length - 1], this.arr[0]];
        this.arr.pop();
        this.downHeapify(0);
    }
    downHeapify(i) {
        while (i < this.arr.length) {
            let lc = (i * 2) + 1;
            let rc = (i * 2) + 2;
            let max = i;
            if (lc < this.arr.length && this.cmp(this.arr[max], this.arr[lc])) max = lc;
            if (rc < this.arr.length && this.cmp(this.arr[max], this.arr[rc])) max = rc;

            if (max != i) {
                [this.arr[max], this.arr[i]] = [this.arr[i], this.arr[max]];
                i = max;
            } else break;
        }
    }
    root() {
        return this.arr[0];
    }
    isEmpty() {
        return this.arr.length == 0;
    }
}

function prims(graph, n, source) {
    let hp = new Heap((w1, w2) => w1[1] > w2[1]);
    let weights = {};
    let vis = new Set();
    for (let i = 0; i < n; i++) {
        weights[i] = Infinity;
    }

    weights[source] = 0;
    hp.insert([source, 0]);

    let spanningTreeSum = 0;
    
    while (!hp.isEmpty()) {
        let top = hp.root();
        hp.delete();
        let [node, weight] = top;
        if (vis.has(node)) continue;
        vis.add(node);
        spanningTreeSum += weight;

        for (let ni of graph[node]) {
            let [niNode, niWeight] = ni;
            if (vis.has(niNode)) continue;

            if (weights[niNode] > niWeight) {
                weights[niNode] = niWeight;
                hp.insert([niNode, niWeight]);
            }
        }
    }
    return spanningTreeSum
}

let n = 5;

let graph = [
    [[1, 4], [2, 8]],
    [[0, 4], [2, 2], [3, 5]],
    [[0, 8], [1, 2], [3, 5]],
    [[1, 5], [2, 5], [4, 6]],
    [[3, 6]]
];

let response = prims(graph, n, 0);
console.log(response);