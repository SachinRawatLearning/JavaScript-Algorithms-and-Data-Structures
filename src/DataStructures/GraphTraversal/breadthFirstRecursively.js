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

  _bfs(startingVertex) {
    const result = [];
    const visited = {};
    const queue = [];
    queue.push(startingVertex);
    visited[startingVertex] = true;

    const helper = () => {
      if (!queue.length) return;

      const poppedVertex = queue.shift();
      result.push(poppedVertex);

      this._adjacencyList[poppedVertex].forEach((vertex) => {
        if (!visited[vertex]) {
          visited[vertex] = true;
          queue.push(vertex);
        }
      });

      helper();
    };

    helper();
    return result;
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

console.log(gh._bfs("A")); //[ 'A', 'B', 'C', 'D', 'E', 'F' ]

/*
                  A
               /     \
              B       C  
              |       |  
              D  ---  E
              \      /
                  F
          */
