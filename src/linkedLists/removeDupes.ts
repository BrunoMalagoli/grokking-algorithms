import { List, ListElement } from ".";

function RemoveDupes(list: List) {
  if (list.head == null) return;
  let current: ListElement | null = list.head;
  const foundValues = new Map();
  foundValues.set(current?.value, current?.value);

  while (current != null && current.next != null) {
    if (foundValues.has(current.next.value)) {
      current.next = current.next.next;
    } else {
      foundValues.set(current.next?.value, current.next?.value);
      current = current.next;
    }
  }
}

let newList = new List();
newList.append(1);
newList.append(2);
newList.append(1);
newList.append(3);
newList.append(2);
newList.append(1);
console.log("PRE REMOVE");
newList.getAll();
RemoveDupes(newList);
console.log("POST REMOVE");
newList.getAll();
