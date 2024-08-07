class WeightedGraph {
  constructor() {
    this._adjacencyList = {};
  }

  _addVertex(vertex) {
    if (!this._adjacencyList[vertex]) this._adjacencyList[vertex] = [];
  }

  _addEdge(vertex1, vertex2, weight) {
    this._adjacencyList[vertex1].push({ node: vertex2, weight });
    this._adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}

const wg = new WeightedGraph();
wg._addVertex("A");
wg._addVertex("B");
wg._addVertex("C");
wg._addEdge("A", "B", 9);
wg._addEdge("A", "C", 5);
wg._addEdge("B", "C", 7);
console.log(wg);
/*
   _adjacencyList: {
      A: [ { node: 'B', weight: 9 }, { node: 'C', weight: 5 } ],
      B: [ { node: 'A', weight: 9 }, { node: 'C', weight: 7 } ],
      C: [ { node: 'A', weight: 5 }, { node: 'B', weight: 7 } ]
    }
  */
