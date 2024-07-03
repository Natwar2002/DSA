var findOrder = function (numCourses, prerequisites) {
    let g = new Array(numCourses);
    let indegree = new Array(numCourses).fill(0);
    for(let i = 0; i < numCourses; i++) g[i] = [];
    for(let i = 0; i < prerequisites.length; i++) {
        let cur = prerequisites[i];
        let a = cur[0];
        let b = cur[1];
        g[b].push(a);
        indegree[a]++;
    }
    return topoSort(g, numCourses, indegree);
};

function topoSort(g, n, indegree) {
    let q = [];
    let vis = new Set();
    for(let i = 0; i < n; i++) {
        if(indegree[i] == 0) {
            q.push(i);
            vis.add(i);
        }
    }
    let c = 0, res = [];
    while(q.length > 0) {
        let cur = q.shift();
        res.push(cur);
        c++;
        for(let ni of g[cur]) {
            if(!vis.has(ni)) {
                indegree[ni]--;
                if(indegree[ni] == 0) {
                    q.push(ni);
                    vis.add(ni);
                }
            }
        }
    }
    return c == n ? res : [];
}