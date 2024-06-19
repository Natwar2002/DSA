class Graph {
    constructor(noOfVertices) {
        this.v = noOfVertices;
        this.adjList = new Array(this.v)
        for(let i = 0; i < this.v; i++) {
            this.addEdge[i] = [];
        }
    }

    addEdge(v1, v2, biDir = true) {
        this.adjList[v1].push(v2);
        if(biDir){
            this.adjList[v2].push(v1);
        }
    }

    display() {
        console.log(this.adjList);
    }
}

let g = new Graph(7);