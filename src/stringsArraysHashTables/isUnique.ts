function isUnique(str: string) {
  const hash = new Map<string, string>();
  let isUnique = true;
  const maxNumberOfChars = 128; //ASCII max

  if (maxNumberOfChars == str.length) {
    isUnique = false;
    return isUnique; //O(1)
  }

  for (let i = 0; i < str.length; i++) {
    //O(N)
    if (hash.has(str[i])) {
      isUnique = false;
    } else {
      hash.set(str[i], str[i]);
    }
  }

  return isUnique;
}

const prueba = console.log(isUnique("abcde"));
