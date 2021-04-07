class Stack {
  constructor() {
    this.data = [];
    this.counter = 0;
  }

  push(item) {
    this.data[this.counter] = item;
    this.counter++;
    return this.counter - 1;
  }

  pop() {
    if (this.counter === 0) return undefined;
    let popItem = this.data[this.counter - 1];
    console.log(popItem);
    this.counter -= 1;
    return popItem;
  }

  print() {
    console.log(this.data);
  }
  size() {
    return this.counter;
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

stack.print();

stack.pop();
stack.pop();
stack.pop();
