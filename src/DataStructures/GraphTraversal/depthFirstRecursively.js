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

  _dfs(startingVertex) {
    const resultArray = [];
    const visited = {};

    const helperFn = (vertex) => {
      //Base Condition
      if (!vertex) return;

      //Push into result array and mark it as true in visited object
      resultArray.push(vertex);
      visited[vertex] = true;

      //Recursively call helper function with the neighbours of vertex
      for (let item of this.adjacencyList[vertex]) {
        if (!visited[item]) return helperFn(item);
      }
    };

    helperFn(startingVertex);
    return resultArray;
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

console.log(gh._dfs("A")); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]

/*
          A
       /     \
      B       C  
      |       |  
      D  ---  E
      \      /
          F
  */

// gh._print();
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
