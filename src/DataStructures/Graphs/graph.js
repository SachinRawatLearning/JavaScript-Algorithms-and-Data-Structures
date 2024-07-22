class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  _addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  _removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((adjacentVertex) =>
      this._removeEdge(adjacentVertex, vertex)
    );
    delete this.adjacencyList[vertex];
  }

  _addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  _removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (ele) => ele !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (ele) => ele !== vertex1
    );
  }

  _print() {
    for (let item of Object.entries(this.adjacencyList)) console.log(item);
  }
}

const g = new Graph();
g._addVertex("Dallas");
g._addVertex("Tokyo");
g._addVertex("Aspen");
g._addVertex("Los Angeles");
g._addVertex("Hong Kong");
g._addEdge("Dallas", "Tokyo");
g._addEdge("Dallas", "Aspen");
g._addEdge("Hong Kong", "Tokyo");
g._addEdge("Hong Kong", "Dallas");
g._addEdge("Los Angeles", "Hong Kong");
g._addEdge("Los Angeles", "Aspen");
g._removeVertex("Hong Kong");
g._print("");
// {
//   ["Dallas", ["Tokyo", "Aspen"]]
//   [("Tokyo", ["Dallas"])]
//   [("Aspen", ["Dallas", "Los Angeles"])];
// }
