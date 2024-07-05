function FIND (x, parent) {
    if(parent[x] !== x) {
        parent[x] = FIND(parent[x], parent);
    }
    return parent[x];
}

function UNION (x, y, parent, size) {
    let px = FIND(x, parent);
    let py = FIND(y, parent);

    if(px === py) return;
    if(size[px] < size[py]) {
        parent[px] = py;
        size[py] += size[px];
    } else {
        parent[py] = px;
        size[px] += size[py];
    }
}

function Kruskal (edgeList, n) {
    edgeList.sort((e1, e2) => e1[2] - e2[2]) // Sort the edges by weight
    let SpanningTreeSum = 0;
    let parent = new Array(n).fill(0).map((item, index) => index);
    let size = new Array(n).fill(1);

    for(let edge of edgeList) {
        let [u, v, weight] = edge;
        if(FIND(u, parent) !== FIND(v, parent)) {
            UNION(u, v, parent, size);
            SpanningTreeSum += weight;
        }
    }
    return SpanningTreeSum;
}