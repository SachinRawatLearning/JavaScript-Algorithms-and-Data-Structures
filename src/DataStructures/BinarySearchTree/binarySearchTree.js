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
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left = new Node(4);
tree.root.right = new Node(15);
tree.root.right.left = new Node(12);
tree.root.left.right = new Node(6);

console.log(tree);
