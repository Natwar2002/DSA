let res, g;

function dfs(src, ans) {
    if(src == g.length - 1) {
        res.push(ans);
    }
    for(let neighbour of g[src]) {
        // dfs(neighbour, ans.concat([neighbour]));
        dfs(neighbour, [...ans, neighbour]);
    }
}

var allPathsSourceTarget = function (graph) {
    g = graph;
    res = [];
    dfs(0, [0]);
    return res;
};