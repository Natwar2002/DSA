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
        while(i > 0) {
            let pi = Math.floor((i-1)/2);
            if(this.cmp(this.arr[pi], this.arr[i])) {
                [this.arr[pi], this.arr[i]] = [this.arr[i], this.arr[pi]];
                i = pi;
            } else break;
        }
    }
    delete(){
        if(this.isEmpty()) return;
        [this.arr[0], this.arr[this.arr.length - 1]] = [this.arr[this.arr.length - 1], this.arr[0]];
        this.arr.pop();
        this.downHeapify(0);
    }
    downHeapify(i) {
        while(i < this.arr.length) {
            let lc = (i * 2) + 1;
            let rc = (1 * 2) + 2;
            let max = i;
            if(lc < this.arr.length && this.cmp(this.arr[max], this.arr[lc])) max = lc;
            if(rc < this.arr.length && this.cmp(this.arr[max], this.arr[rc])) max = rc;

            if(max != i) {
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

function dijkstra(graph, n, source) {
    let hp = new Heap((a, b) => a[1] > b[1]);
    let visited = new Set();
    let distances = {};
    let via = {};
    for(let i = 0; i < n; i++) {
        distances[i] = Infinity;
        via[i] = undefined;
    }
    distances[source] = 0;
    via[source] = -1;
    hp.insert([source, 0]);

    while(!hp.isEmpty()) {
        let topmost = hp.root();
        hp.delete();

        let [node, distance] = topmost;
        if(visited.has(node)) continue;
        visited.add(node);

        for(const neighbour of graph[node]) {
            let [neighbourNode, neighbourDistance] = neighbour;
            if(visited.has(neighbourNode)) continue;
            
            if(via[neighbourNode] == undefined || distances[neighbourNode] > distance + neighbourDistance) {
                via[neighbourNode] = node;
                distances[neighbourNode] = distance + neighbourDistance;
                hp.insert([neighbourNode, distance + neighbourDistance])
            }
        }
    }
    return [distances, via];
}

let n = 5;

let graph = [
    [[1, 4], [2, 8]],
    [[0, 4], [2, 2], [3, 5]],
    [[0, 8], [1, 2], [3, 5]],
    [[1, 5], [2, 5], [4, 6]],
    [[3, 6]]
];

let response = dijkstra(graph, n, 0);
console.log("Distances :", response[0]);
console.log("Via :", response[1]);