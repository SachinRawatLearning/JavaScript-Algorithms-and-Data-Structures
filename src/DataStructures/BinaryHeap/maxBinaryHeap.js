class Binaryheap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);

    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    //parent for pushed element -> (n-1)/2
    let parent = Math.floor((index - 1) / 2);

    while (this.values[parent] < this.values[index] && parent >= 0) {
      temp = this.values[index];
      this.values[index] = this.values[parent];
      this.values[parent] = temp;

      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  extractMax() {
    if (!this.values.length) return undefined;

    const max = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();

    this.sinkDown();

    return max;
  }

  sinkDown() {
    let eleIndex = 0;
    const length = this.values.length;
    let ele = this.values[eleIndex];

    while (true) {
      let leftChildIndex = 2 * eleIndex + 1;
      let rightChildIndex = 2 * eleIndex + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > ele) {
          swap = leftChild;
        }
      }

      if (!swap) break;
    }
  }

  print() {
    for (let ele of this.values) {
      console.log(ele); //55,45,41,39,27,33,1,18
    }
  }
}

let bh = new Binaryheap();
bh.insert(41);
bh.insert(39);
bh.insert(33);
bh.insert(18);
bh.insert(27);
bh.insert(55);
bh.insert(1);
bh.insert(45);
bh.print();
