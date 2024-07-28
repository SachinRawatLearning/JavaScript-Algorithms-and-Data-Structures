class Graph {
  constructor() {
    this._adjacenyList = {};
  }

  _addVertex(vertex) {
    if (!this._adjacenyList[vertex]) this._adjacenyList[vertex] = [];
  }

  _addEdge(vertex1, vertex2) {
    this._adjacenyList[vertex1].push(vertex2);
    this._adjacenyList[vertex2].push(vertex1);
  }

  _dfs(startingVertex) {
    const stack = [];
    const result = [];
    const visited = {};

    stack.push(startingVertex);
    visited[startingVertex] = true;

    const adjacencyList = this._adjacenyList;

    while (stack.length) {
      const currentVertex = stack.pop();
      result.push(currentVertex);

      adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  _print() {
    for (let [key, value] of Object.entries(this._adjacenyList))
      console.log(key, value);
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

console.log(gh._dfs("A")); //[ 'A', 'C', 'E', 'F', 'D', 'B' ]

/*
            A
         /     \
        B       C  
        |       |  
        D  ---  E
        \      /
            F
    */
