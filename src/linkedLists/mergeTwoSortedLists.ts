import { List, ListElement } from ".";
/*
 * Escribe un algoritmo para combinar dos listas enlazadas simples ordenadas.
 * El resultado debe ser una única lista enlazada ordenada. Devuelve su head.
 *
 * Ejemplo:
 *  Input: 1->2->4->6, 2->3->5
 *  Output: 1->2->2->3->4->5->6
 */

function MergeTwoSortedLists(list1: List, list2: List) {
  let currList1: ListElement | null = list1.head;
  let currList2: ListElement | null = list2.head;
  let newList = new List();

  while (currList1 != null && currList2 != null) {
    if (currList1.value <= currList2.value) {
      newList.append(currList1.value);
      currList1 = currList1.next;
    } else {
      newList.append(currList2.value);
      currList2 = currList2.next;
    }
  }

  while (currList1 !== null) {
    newList.append(currList1.value);
    currList1 = currList1.next;
  }

  while (currList2 !== null) {
    newList.append(currList2.value);
    currList2 = currList2.next;
  }

  return newList;
}

const list1 = new List();
const list2 = new List();
list1.append(1);
list1.append(2);
list1.append(4);
list1.append(6);

list2.append(2);
list2.append(3);
list2.append(5);

const newList = MergeTwoSortedLists(list1, list2);
newList.getAll();
