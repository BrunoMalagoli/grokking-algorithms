import { List, ListElement } from ".";
/*
 * Dada una lista enlazada simple y un valor N, devuelve el nodo N empezando por el final
 *
 * Ejemplo:
 *  Input: 1->2->4->6, 2
 *  Output: 4
 */

function nthNodeFromLast(list: List, n: any) {
  let fastPointer: ListElement | null = list.head;
  let slowPointer: ListElement | null = list.head;
  if (fastPointer == null || slowPointer == null) {
    console.log("No head in the list");
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (fastPointer == null) return null;
    fastPointer = fastPointer!.next;
  }
  while (fastPointer != null) {
    fastPointer = fastPointer.next;
    slowPointer = slowPointer!.next;
  }
  return slowPointer?.value;
}

const lista = new List();

lista.append(1);
lista.append(2);
lista.append(4);
lista.append(6);
lista.append(8);
lista.append(10);

console.log(nthNodeFromLast(lista, 6)); //output 1
