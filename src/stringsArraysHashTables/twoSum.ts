function twoSum(nums: number[], target: number) {
  const compHash = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (compHash.has(nums[i])) {
      let compIndex = compHash.get(nums[i]);
      return [compIndex, i];
    } else {
      let complement = target - nums[i];
      compHash.set(complement, i);
    }
  }
  return null;
}

console.log(twoSum([2, 8, 4, 1], 10));
