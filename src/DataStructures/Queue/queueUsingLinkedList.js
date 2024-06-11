class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    //Add to end
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      newNode.next = null;
    }
    this.length++;
    console.log(this.length);
  }

  dequeue() {
    //Removed from begining
    if (!this.head) return null;

    const removedNode = this.head;
    this.head = this.head.next;
    removedNode.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    console.log(removedNode.val);
  }
}

const queue = new Queue();
queue.enqueue(111);
queue.enqueue(222);
queue.enqueue(333);
// 111 -> 222 -> 333

queue.dequeue();
// 222 -> 333
queue.dequeue();
// 333
queue.dequeue();
