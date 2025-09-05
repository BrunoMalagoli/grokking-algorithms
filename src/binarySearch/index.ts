const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const guess = 10;

function binarySearch(list: number[], guess: number) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.round((low + high) / 2);
    if (list[mid] == guess) return mid;

    if (list[mid] < guess) low = mid + 1;

    if (list[mid] > guess) high = mid - 1;
  }
  return null;
}

let position = binarySearch(list, guess);
console.log(position);
