import { Stack } from ".";

function sortStack(stack: Stack) {
  let sortedStack = new Stack();
  sortedStack.push(stack.pop());
  while (!stack.isEmpty()) {
    let curr = stack.pop();
    while (!sortedStack.isEmpty() && curr > sortedStack.peek()) {
      stack.push(sortedStack.pop());
    }
    sortedStack.push(curr);
  }
  return sortedStack;
}

const unsortedStack = new Stack();
unsortedStack.push(4);
unsortedStack.push(2);
unsortedStack.push(6);
unsortedStack.push(7);
unsortedStack.push(1);
unsortedStack.push(20);
unsortedStack.push(16);

let sortedStack = sortStack(unsortedStack);
let stackCurrent: any = sortedStack.top;

while (stackCurrent?.next) {
  console.log(stackCurrent?.value);
  stackCurrent = stackCurrent?.next;
}
console.log(stackCurrent.value);
