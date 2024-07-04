function UNION(x, y, parent, size) {
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

function FIND (x, parent) {
    if(parent[x] !== x) {
        parent[x] = FIND(parent[x], parent);
    } 
    return parent[x];
}

let parent = [0, 1, 2, 3, 4, 5];
let size = [1, 1, 1, 1, 1, 1];

UNION(0, 1, parent, size);
UNION(2, 3, parent, size);
UNION(4, 5, parent, size);

console.log(parent); // Output: [1, 1, 3, 3, 5, 5]
console.log(size); // Output: [1, 2, 1, 2, 1, 2]