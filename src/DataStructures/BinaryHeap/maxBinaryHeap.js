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
