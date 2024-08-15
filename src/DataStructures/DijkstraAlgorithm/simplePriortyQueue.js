class PriortyQueue {
  constructor() {
    this.values = [];
  }

  enqueue(element, priorty) {
    this.values.push({ element, priorty });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priorty - b.priorty);
  }
}

const p = new PriortyQueue();
p.enqueue(23, 3);
p.enqueue(44, 2);
p.enqueue(33, 1);
console.log(p);
/*
   PriortyQueue {
    values: [
      { element: 33, priorty: 1 },
      { element: 44, priorty: 2 },
      { element: 23, priorty: 3 }
    ]
  }
   */
console.log(p.dequeue()); //{ element: 33, priorty: 1 }
