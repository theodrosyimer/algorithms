/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have at LEAST the following complexities:
- Time Complexity - O(N + M)
- Space Complexity - O(1)
*/

// Iterative solution
function isSubsequence2(str1, str2) {
  let i = 0
  let j = 0
  if (!str1) return true
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++
    if (i === str1.length) return true
    j++
  }
  return false
}

isSubsequence2('hello', 'hello world') // ?
isSubsequence2('sing', 'sting') // ?
isSubsequence2('abc', 'abracadabra') // ?
isSubsequence2('abc', 'acb') // ?
isSubsequence2('', 'acb') // ?

// Recursive but not O(1) Space
function isSubsequence3(str1, str2) {
  if (str1.length === 0) return true
  if (str2.length === 0) return false
  if (str2[0] === str1[0]) return isSubsequence3(str1.slice(1), str2.slice(1))
  return isSubsequence3(str1, str2.slice(1))
}

isSubsequence3('hello', 'hello world') // ?
isSubsequence3('sing', 'sting') // ?
isSubsequence3('abc', 'abracadabra') // ?
isSubsequence3('abc', 'acb') // ?
isSubsequence3('', 'acb') // ?

// my solution
const isSubsequence = (str1, str2) => {
  if (str1.length === 0 || str2.length === 0) {
    return 'You must pass two string'
  }

  let p1 = 0
  let p2 = 0

  for (p2; p1 < str1.length; p2++) {
    if (p2 === str2.length) {
      return false
    }
    if (str1[p1] === str2[p2]) {
      p1 += 1 // ?
      p2 = p1 - 1 // ?
    }
  }
  return true
}

isSubsequence('hello', 'hello world') // ?
isSubsequence('sing', 'sting') // ?
isSubsequence('abc', 'abracadabra') // ?
isSubsequence('abc', 'acb') // ?
isSubsequence('', 'acb') // ?
