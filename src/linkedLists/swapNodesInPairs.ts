import { List, ListElement } from ".";
/*
 * Escribe un algoritmo que intercambie parejas de nodos adyacentes sin
 * modificar el valor interno de los nodos.
 *
 * Ejemplo:
 *  Input: 1->2->4->6->8
 *  Output: 2->1->6->4->8
 */

function swapNodesInPairs(head: ListElement | null) {
  if (head == null || head.next == null) return head;

  let tempHead = head.next.next; //4->6->8
  head.next.next = head; // 1->2->1
  head = head.next; //2->1
  head.next!.next = swapNodesInPairs(tempHead); // 1 apunta al resto de la lista
  return head;
}

let lista = new List();
lista.append(1);
lista.append(2);
lista.append(4);
lista.append(6);
lista.append(8);

lista.head = swapNodesInPairs(lista.head);
lista.getAll();
