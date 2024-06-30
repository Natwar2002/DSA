function bfs(src, dest, g, visited) {
    if (src === dest) return true;
    let q = [];
    q.push(src);
    visited.add(src);
    while (!q.length == 0) {
        const el = q.shift();
        for (let n of g[el]) {
            if (n == dest) return true;
            if (!visited.has(n)) {
                visited.add(n);
                q.push(n);
            }
        }
    }
    return false;
}

var validPath = function (n, edges, source, destination) {
    let g = new Array(n);
    for (let i = 0; i < n; i++) {
        g[i] = [];
    }
    for (let i = 0; i < edges.length; i++) {
        let u = edges[i][0];  // Begining of edge
        let v = edges[i][1];  // Termination of edge
        g[u].push(v);
        g[v].push(u);
    }

    return bfs(source, destination, g, new Set());
};