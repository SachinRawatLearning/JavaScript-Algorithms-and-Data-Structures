class Graph {
  constructor() {
    this._adjacencyList = {};
  }

  _addVertex(vertex) {
    if (!this._adjacencyList[vertex]) this._adjacencyList[vertex] = [];
  }

  _addEdge(vertex1, vertex2) {
    this._adjacencyList[vertex1].push(vertex2);
    this._adjacencyList[vertex2].push(vertex1);
  }

  _bfs(startingVertex) {}
}

const gh = new Graph();
gh._addVertex("A");
gh._addVertex("B");
gh._addVertex("C");
gh._addVertex("D");
gh._addVertex("E");
gh._addVertex("F");

gh._addEdge("A", "B");
gh._addEdge("A", "C");
gh._addEdge("B", "D");
gh._addEdge("C", "E");
gh._addEdge("D", "E");
gh._addEdge("D", "F");
gh._addEdge("E", "F");

console.log(gh._bfs("A")); //

/*
            A
         /     \
        B       C  
        |       |  
        D  ---  E
        \      /
            F
    */
