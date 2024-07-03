function topoSort() {

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
    }
    return topoSort(g, numCourses, indegree);
}