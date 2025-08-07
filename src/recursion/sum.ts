const array = [5, 6, 8];

function sum(array: number[]): number {
  if (array.length === 0) {
    return 0;
  } else {
    let firstElement = array.shift();
    return firstElement! + sum(array);
  }
}
const result = sum(array);
console.log(result);
