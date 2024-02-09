/**
 * @param {number[]} numbers
 * @param {number} value
 * @returns {number}
 *
 * @example
 * linearSearch([1, 6, 3, 4, 5, 6], 4) // 3
 * linearSearch([1, 5, 3, 4, 12, 6], 10) // -1
 * linearSearch([], 10) // undefined
 *
 * @description
 * Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.
 *
 * Constraints:
 *
 * - Time Complexity - O(n)
 * - Space Complexity - O(1)
 *  */
const linearSearch = (numbers, value) => {
  if (!numbers.length) return undefined

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === value) return i
  }

  return -1
}

linearSearch([1, 6, 3, 4, 5, 6], 4)
linearSearch([1, 2, 13, 4, 5, 7], 13)
linearSearch([1, 5, 3, 4, 12, 6], 10)
