class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      //no root is there then create root
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined; //ignoring equality case
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val) {
    if (this.root === null) return false;
    let current = this.root;
    while (true) {
      if (current.val === val) return true;
      else if (current.val > val) {
        if (current.left === null) return false;
        current = current.left;
      } else {
        if (current.right === null) return false;
        current = current.right;
      }
    }
  }

  BFS() {
    const queue = [];
    const visited = [];

    if (this.root === null) return undefined;

    queue.push(this.root);
    while (queue.length) {
      const visitedNode = queue.shift();
      visited.push(visitedNode.val);
      if (visitedNode.left !== null) queue.push(visitedNode.left);
      if (visitedNode.right !== null) queue.push(visitedNode.right);
    }

    return visited;
  }
}

//             10
//     5                   13
// 2       7           11      16

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
tree.insert(7);
console.log(tree.BFS());
