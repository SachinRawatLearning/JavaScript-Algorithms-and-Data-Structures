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
      let temp = this.values[index];
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

    if (this.values.length > 0) this.sinkDown();

    return max;
  }

  sinkDown() {
    let eleIndex = 0;
    const length = this.values.length;

    while (true) {
      let ele = this.values[eleIndex];
      let leftChildIndex = 2 * eleIndex + 1;
      let rightChildIndex = 2 * eleIndex + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        //If Left child is greater than the parent
        if (leftChild > ele) swap = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        //If Right child is greater than the parent or if Both left and right are greater and right is greater than left too
        if ((!swap && rightChild > ele) || (swap && rightChild > leftChild))
          swap = rightChildIndex;
      }

      if (!swap) break;

      this.values[eleIndex] = this.values[swap];
      this.values[swap] = ele;

      eleIndex = swap;
    }
  }

  print() {
    for (let ele of this.values) {
      console.log(ele);
      //45,39,33,18,27,12
      //39,27,33,18,12
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
bh.insert(12);
console.log(bh.extractMax()); //55
bh.print();
console.log(bh.extractMax()); //41
bh.print();