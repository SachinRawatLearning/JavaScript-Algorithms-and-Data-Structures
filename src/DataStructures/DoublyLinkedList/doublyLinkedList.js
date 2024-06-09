class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    const removedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    const removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    const startFromHead = index <= Math.floor(this.length / 2) ? true : false;
    let counter;
    let foundNode;
    if (startFromHead) {
      //Working from Start
      counter = 0;
      foundNode = this.head;
      while (counter !== index) {
        foundNode = foundNode.next;
        counter++;
      }
    } else {
      //Working from End
      counter = this.length - 1;
      foundNode = this.tail;
      while (counter != index) {
        foundNode = foundNode.prev;
        counter--;
      }
    }
    return foundNode;
  }

  print() {
    let arr = [];
    let currNode = this.head;
    for (let i = 0; i < this.length; i++) {
      arr.push(currNode.val);
      currNode = currNode.next;
    }
    console.log(arr);
  }
}

let first = new DoublyLinkedList(12);
first.push(100);
first.push(200);
first.push(300);
first.push(400);
first.pop();
first.shift();
first.unshift(44);
console.log(first.get(2));
first.print();
