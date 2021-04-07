class Queue {
  constructor() {
    this.data = [];
    this.count = 0;
  }

  enqueue(item) {
    this.data = [...this.data, item];
    this.count++;
    return this.count - 1;
  }

  dequeue() {
    return this.data.shift();
    this.count -= 1;
  }

  print() {
    console.log(this.data);
  }

  size() {
    return this.count;
  }
}

let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);

console.log(q.dequeue());
console.log(q.dequeue());

q.print();
