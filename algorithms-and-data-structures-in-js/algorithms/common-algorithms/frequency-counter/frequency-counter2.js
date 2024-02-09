function validAnagram(word1, word2) {
  // if word1 OR word2 is empty return false
    if (word1 === undefined || word2 === undefined) {
      return false
    }

  // if length is not the same return false
  if (word1.length !== word2.length) {
    return false
  }

  // if both strings are empty return true
  if ((word1.length === 0 && word2.length === 0)) {
    return true
  }

  // create an object to track the occurences
  let str1LetterCount = {}
  let str2LetterCount = {}

  // loop over each letter of the first string and increment the count if alredy exist
  for (let letter of word1) {
    str1LetterCount[letter] = (str1LetterCount[letter] || 0) + 1
  }

  // same for the second string
  for (let letter of word2) {
    str2LetterCount[letter] = (str2LetterCount[letter] || 0) + 1
  }

  // compare the count of each letter
  for (let letter in str1LetterCount) {
    if (!(letter in str2LetterCount)) {
      return false
    }
    if (str1LetterCount[letter] !== str2LetterCount[letter]) {
      return false
    }
  }
  return true
}

console.log(validAnagram('', ''))
console.log(validAnagram('azz', 'zza'))
console.log(validAnagram('azz'))
console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram('rat', 'car'))
console.log(validAnagram('awesome', 'aweso'))
