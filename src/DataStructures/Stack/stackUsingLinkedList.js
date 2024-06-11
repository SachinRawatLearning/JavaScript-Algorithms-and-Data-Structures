class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    console.log(this.length);
  }

  pop() {
    if (this.length === 0) return undefined;
    const removedNode = this.tail;
    let currNode = this.head;
    let prevNode = currNode;
    let count = 0;
    while (currNode.next) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    prevNode.next = null;
    this.tail = prevNode;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    console.log(removedNode.val);
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    console.log(this.length);
  }

  shift() {
    if (this.length === 0) return undefined;
    const removedNode = this.head;
    this.head = this.head.next;
    removedNode.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    console.log(removedNode);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
// 1 -> 2 -> 3

stack.pop();
//1 -> 2
stack.pop();
// 1
stack.pop();

stack.unshift(22);
stack.unshift(33);
stack.unshift(44);
console.log(stack);
// 44 -> 33 -> 22

stack.shift();
//33->22
stack.shift();
//22
stack.shift();
