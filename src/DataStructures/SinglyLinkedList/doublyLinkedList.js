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
        this.newNode.prev = this.tail;
      }
      this.length++;
      return this;
    }
  }
  
  let first = new DoublyLinkedList(12);
  first.push(100);
  first.push(200);
  console.log(first);
  