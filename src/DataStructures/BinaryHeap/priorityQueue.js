class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

//Priorty Queue using Min Binary Heap
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const node = new Node(val, priority);
    this.values.push(node);

    this.bubbleUp();
  }

  bubbleUp() {
    let eleIndex = this.values.length - 1;
    let parentIndex = Math.floor((eleIndex - 1) / 2);

    while (
      parentIndex >= 0 &&
      this.values[eleIndex].priority < this.values[parentIndex].priority
    ) {
      let temp = this.values[eleIndex];
      this.values[eleIndex] = this.values[parentIndex];
      this.values[parentIndex] = temp;

      eleIndex = parentIndex;
      parentIndex = Math.floor((eleIndex - 1) / 2);
    }
  }

  dequeue() {
    const maxPriorty = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();

    if (this.values.length > 0) this.sinkDown();

    console.log(maxPriorty);
  }

  sinkDown() {
    let eleIndex = 0;
    let length = this.values.length;

    while (true) {
      let ele = this.values[eleIndex];
      let leftIndex = 2 * eleIndex + 1;
      let rightIndex = 2 * eleIndex + 2;
      let leftEle, rightEle;
      let swap = null;

      if (leftIndex < length) {
        leftEle = this.values[leftIndex];
        if (leftEle.priority < ele.priority) swap = leftIndex;
      }

      if (rightIndex < length) {
        rightEle = this.values[rightIndex];
        if (
          (!swap && rightEle.priority < ele.priority) ||
          (swap && rightEle.priority < leftEle.priority)
        )
          swap = rightIndex;
      }

      if (!swap) break;

      this.values[eleIndex] = this.values[swap];
      this.values[swap] = ele;

      eleIndex = swap;
    }
  }

  print() {
    for (let ele of this.values) console.log(ele);
  }
}

const ER = new PriorityQueue();

ER.enqueue("Common cold", 5);
ER.enqueue("Gunshot wound", 1);
ER.enqueue("High fever", 4);
ER.enqueue("Broken arm", 2);
ER.enqueue("Glass Injury", 3);

ER.dequeue(); //Gunshot wound
ER.dequeue(); //Broken arm
ER.dequeue(); //Glass Injury
ER.dequeue(); //High fever
ER.dequeue(); //Common cold
ER.dequeue(); //Undefined
