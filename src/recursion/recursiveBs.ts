const arr = [4, 6, 7, 8, 9, 16, 26, 54, 64, 122];
const target = 64;

function recursiveBS(
  arr: number[],
  target: number,
  low: number,
  high: number
): number | false {
  if (low > high) {
    return false;
  }
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] == target) {
    return mid;
  }
  return arr[mid] > target
    ? recursiveBS(arr, target, low, mid - 1)
    : recursiveBS(arr, target, mid + 1, high);
}

console.log(recursiveBS(arr, target, 0, arr.length));
