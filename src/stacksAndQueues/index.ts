export class Node {
  value: any;
  next: Node | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

export class Stack {
  top: Node | null = null;

  push(value: any) {
    const newTop = new Node(value);
    newTop.next = this.top;
    this.top = newTop;
  }

  peek() {
    if (!this.top) {
      console.log("There is no items in the stack");
      return;
    }
    return this.top.value;
  }

  pop() {
    if (!this.top) {
      console.log("There is no items in the stack");
      return;
    }
    let topValue = this.top.value;
    this.top = this.top.next;
    return topValue;
  }

  isEmpty() {
    return this.top == null;
  }
}

export class Queue {
  first: Node | null = null;
  last: Node | null = null;

  add(value: any) {
    const newNode = new Node(value);
    if (this.last != null) {
      this.last.next = newNode;
    }
    this.last = newNode;
    if (!this.first) {
      this.first = this.last;
    }
  }

  remove() {
    if (this.first == null) {
      console.log("The queue is empty");
      return;
    }
    const firstValue = this.first.value;
    this.first = this.first.next;
    if (this.first == null) {
      this.last = null;
    }
    return firstValue;
  }

  peek() {
    if (this.first == null) {
      console.log("The queue is empty");
      return;
    }
    return this.first.value;
  }

  isEmpty() {
    return this.first == null;
  }
}
