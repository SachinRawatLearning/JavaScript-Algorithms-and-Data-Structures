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

  DFS_postOrder() {
    if (this.root === null) return;

    const visited = [];
    const current = this.root;
    const traverse = function (node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        visited.push(node.val);
    };
    traverse(current);
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
console.log(tree.DFS_preOrder());
