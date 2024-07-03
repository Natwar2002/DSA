function topoSort(g, n, indegree) {
    let q = [];
    let vis = new Set();
    for(let i = 0; i < n; i++) {
        if(indegree[i] == 0) {
            q.push(i);
            vis.add(i);
        }
    }
    let c = 0;
    while(q.length > 0) {
        let cur = q.shift();
        c++;
        for(let neighbour of g[cur]) {
            if(!vis.has(neighbour)) {
                indegree[neighbour]--;
                if(indegree[neighbour] == 0) {
                    q.push(neighbour);
                    vis.add(neighbour);
                }
            }
        }
    }
    return c == n;
}

var canFinish = function(numCourses, prerequisites) {
    let g = new Array(numCourses);
    for(let i = 0; i < numCourses; i++) g[i] = [];

    let indegree = new Array(numCourses).fill(0);
    for(let i = 0; i < prerequisites.length; i++) {
        let cur = prerequisites[i];
        let a = cur[0];
        let b = cur[1];
        g[b].push(a);
        indegree[a]++;
    }
    return topoSort(g, numCourses, indegree);
}