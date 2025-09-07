import { List, ListElement } from ".";
/*
 * Escribe un algoritmo que realice la suma de dos listas que representan
 * dos enteros positivos. Las listas están en posición invertida.
 *
 * Ejemplo:
 *  Input: 1->2->4->6, 5->2->8
 *  Output: 6->4->2->7
 *  6421 + 825 = 7246
 */

function addTwoNums(list1: ListElement | null, list2: ListElement | null) {
  let result = new ListElement(-1);
  let current = result;
  let carry = 0;

  while (list1 != null || list2 != null) {
    let digit = carry;
    current.next = new ListElement(-1);
    current = current.next;

    if (list1 != null) {
      digit += list1.value;
      list1 = list1.next;
    }
    if (list2 != null) {
      digit += list2.value;
      list2 = list2.next;
    }

    carry = Math.floor(digit / 10);
    digit = digit % 10;

    current.value = digit;
  }

  if (carry) {
    current.next = new ListElement(carry);
  }

  return result.next;
}

let lista1 = new List();
let lista2 = new List();

lista1.append(1);
lista1.append(2);
lista1.append(4);
lista1.append(6);

lista2.append(5);
lista2.append(2);
lista2.append(8);

let resultList = new List();
let resultListHead = addTwoNums(lista1.head, lista2.head);
resultList.head = resultListHead;
resultList.getAll();
