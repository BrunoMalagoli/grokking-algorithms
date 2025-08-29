function getAnagramHash(str: string) {
  const charArr = str.split("");
  let anagramHashArr: number[] = new Array(26).fill(0);
  charArr.forEach((char) => {
    anagramHashArr[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  });
  return anagramHashArr.toString();
}
function groupAnagrams(strArr: string[]) {
  const anagramHash = new Map();
  for (let i = 0; i < strArr.length; i++) {
    if (anagramHash.has(getAnagramHash(strArr[i]))) {
      anagramHash.get(getAnagramHash(strArr[i])).push(strArr[i]);
    } else {
      anagramHash.set(getAnagramHash(strArr[i]), [strArr[i]]);
    }
  }
  return [...anagramHash.values()];
}

console.log(groupAnagrams(["caso", "malo", "soca", "loma", "roma"]));
