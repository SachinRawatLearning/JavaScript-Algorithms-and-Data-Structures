class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  _addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  _addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  _print() {
    for (let [ele, values] of Object.entries(this.adjacencyList))
      console.log(ele, values);
  }
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

gh._print();
/*
  {
      [ 'A', [ 'B', 'C' ] ],
      [ 'B', [ 'A', 'D' ] ],
      [ 'C', [ 'A', 'E' ] ],
      [ 'D', [ 'B', 'E', 'F' ] ],
      [ 'E', [ 'C', 'D', 'F' ] ],
      [ 'F', [ 'D', 'E' ] ]
  }
  */
