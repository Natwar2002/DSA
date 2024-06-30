function dfs(src, dest, g, visited) {
    if (src === dest) return true;
    let ans = false;
    visited.add(src);
    for (let n of g[src]) {
        if (!visited.has(n)) {
            ans = ans || dfs(n, dest, g, visited);
        }
    }
    return ans;
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

    return dfs(source, destination, g, new Set());
};