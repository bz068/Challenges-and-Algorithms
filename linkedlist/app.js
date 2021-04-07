class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  insertLast(data) {
    let current;
    let node = new Node(data);

    if (!this.head) {
      this.insert(data);
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.size++;
    }
  }

  insertAt(data, index) {
    if (index < 0 && index > this.size) return;

    if (index === 0) {
      this.insert(data);
    }

    let node = new Node(data);
    let prev, current;
    let count = 0;

    current = this.head;

    while (count < index) {
      prev = current;
      count++;
      current = current.next;
    }

    node.next = current;
    prev.next = node;
    this.size++;
  }
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }
  removeAt(index) {
    if (index < 0 && index > this.size) return;

    let prev;
    let current = this.head;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        prev = current;
        count++;
        current = current.next;
      }

      prev.next = current.next;
    }
    this.size--;
  }

  clear() {
    this.head = null;
    this.size = 0;
  }

  print() {
    let current = this.head;
    let arr = [];

    while (current) {
      arr = [...arr, current.data];
      current = current.next;
    }
    console.log(arr);
    return arr;
  }
};

// let ll = new LinkedList();
// ll.insert(1);
// ll.insert(2);
// ll.insert(3);
// ll.insertLast(0);
// ll.insertAt(22, 4);
// ll.insertAt(24, 1);
// ll.getAt(4);
// ll.removeAt(0);
// ll.print();
// console.log(ll.size);
