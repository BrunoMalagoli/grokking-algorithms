const unsortedArr = [8, 43, 23, 522, 1232, 12, 32, 1, 4, 16, 75, 23, 64];

function quickSort(arr: number[]) {
  if (arr.length < 2) {
    return arr;
  }
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  let leftArr = arr.filter((num, i) => num < pivot && i != pivotIndex);
  let rightArr = arr.filter((num) => num > pivot);

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort(unsortedArr));
