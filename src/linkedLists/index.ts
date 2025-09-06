export class ListElement {
  value: any;
  next: ListElement | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

export class List {
  head: ListElement | null;
  tail: ListElement | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value: any) {
    const nextElement = new ListElement(value);
    if (!this.head && !this.tail) {
      this.head = nextElement;
      this.tail = nextElement;
    } else {
      this.tail!.next = nextElement;
      this.tail = nextElement;
    }
    this.length++;
  }

  preppend(value: any) {
    const nextElement = new ListElement(value);
    if (!this.head && !this.tail) {
      this.head = nextElement;
      this.tail = nextElement;
    } else {
      nextElement.next = this.head;
      this.head = nextElement;
    }
    this.length++;
  }

  deleteElement(value: any) {
    if (!this.head) {
      console.log("List is empty");
    }
    if (this.head?.value == value) {
      this.head = this.head!.next;
      return;
    }
    let current = this.head;
    while (current?.next != null) {
      if (current.next.value == value) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  get(index: number) {
    let position = 0;
    let current: ListElement | null = this.head;
    if (!current) {
      return console.log("There is no elements in this list");
    }
    if (index > this.length - 1) {
      return console.log("The index provided does not exists in this list");
    }
    while (position != index) {
      current = current!.next;
      position++;
    }
    return current;
  }

  getAll() {
    if (!this.head) {
      console.log("No intems in the list");
      return;
    }
    let current: ListElement | null = this.head;
    while (current != null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// const lista = new List();
// lista.getAll();
// lista.append("Hola");
// lista.append("mundo");
// lista.append("saludos!");
// lista.getAll();
// lista.deleteElement("Hola");
// lista.getAll();
// console.log(lista.get(3));
