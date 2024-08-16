class PriortyQueue {
  constructor() {
    this.values = [];
  }

  enqueue(element, priorty) {
    this.values.push({ element, priorty });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priorty - b.priorty);
  }
}

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
  _dijstra(start, end) {
    const nodes = new PriortyQueue();
    const distances = {}; // distance from start
    const previous = {}; // previous visited vertex
    let smallest;

    //Build up initial distances and priorties
    for (const vertex of Object.keys(this._adjacencyList)) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue();
      if (smallest.element === end) return;

      this._adjacencyList[smallest].forEach((neighbor) => {});
    }
  }
}

const graph = new WeightedGraph();
graph._addVertex("A");
graph._addVertex("B");
graph._addVertex("C");
graph._addVertex("D");
graph._addVertex("E");
graph._addVertex("F");

graph._addEdge("A", "B", 4);
graph._addEdge("A", "C", 2);
graph._addEdge("B", "E", 3);
graph._addEdge("C", "D", 2);
graph._addEdge("C", "F", 4);
graph._addEdge("D", "E", 3);
graph._addEdge("D", "F", 1);
graph._addEdge("E", "F", 1);

//Graph:
console.log(graph);
graph._dijstra("A", "E");
