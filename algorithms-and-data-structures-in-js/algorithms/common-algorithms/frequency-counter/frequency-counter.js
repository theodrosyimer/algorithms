const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false
  }
  const frequencyCounter1 = {}
  const frequencyCounter2 = {}

  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  console.log(frequencyCounter1)
  console.log(frequencyCounter2)

  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

same([1, 2, 3, 2], [1, 4, 4, 9]) // ?

const isAnagram = (word1, word2) => {
  // here, for simplicity, we assume that we don't get any spaces, punctuations, numbers, different case (lowerCase or upperCase)... but we MUST think about those edge cases in real-world scenarios!

  // if word1.length !== word2.length, return false
  if (word1.length !== word2.length) {
    return false
  }
  // if both are empty, return true
  if (word1 === '' && word2 === '') {
    return true
  }
  // create two objects to store and count the frequency of each character for each word
  const lookup = {}

  // loop over word1
  for (const letter of word1) {
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1)
  }

  console.log(lookup)

  // loop over word2
  for (const letter of word2) {
    if (!lookup[letter]) {
      return false
    }
    lookup[letter] -= 1
  }

  console.log(lookup)

  return true
}

isAnagram('anagram', 'nagaram') // ?
