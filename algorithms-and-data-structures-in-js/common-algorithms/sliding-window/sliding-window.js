/*
### Example:

A function `maxSubarraySum` which accepts an array of integers and a number called `n`.

The function should calculate the maximum sum of `n` consecutive elements in the array.
*/

// Solution with Time Complexity - O(n)
const maxSubarraySum2 = (arr, n) => {
  let maxSum = 0
  let tempSum = 0

  if (arr.length < n) return null

  for (let i = 0; i < n; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 2) // ?
maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 4) // ?
maxSubarraySum2([4, 2, 1, 6], 1) // ?
maxSubarraySum2([4, 2, 1, 6, 2], 4) // ?
maxSubarraySum2([], 4) // ?
