function maxSubarraySum1(arr, num) {
  if (arr.length < num) return null

  let total = 0
  for (let i = 0; i < num; i++) {
    total += arr[i]
  }
  let currentTotal = total
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num]
    total = Math.max(total, currentTotal)
  }
  return total
}

maxSubarraySum1([1, 2, 5, 2, 8, 1, 5], 2) // ?
// maxSubarraySum1([1, 2, 5, 2, 8, 1, 5], 4) // ?
// maxSubarraySum1([4, 2, 1, 6], 1) // ?
// maxSubarraySum1([4, 2, 1, 6, 2], 4) // ?
// maxSubarraySum1([], 4) // ?

// my solution
const maxSubarraySum = (arr, n) => {
  // if arr is empty, return null
  if (arr.length === 0) {
    return null
  }

  // if n is not a number, return a message
  if (typeof n !== 'number') {
    return 'You must pass a number as a range'
  }

  // if n is greater than the `arr.length` return a message
  if (n > arr.length) {
    return null
  }

  // starting from index 0, get the value of n consecutive elements, between index `i` and `j` (spaced by `n`, so if i=0 then j=n),and sum their value
  let i = 0
  let j = n

  // to account negative numbers
  let maxSum = -Infinity
  let tempMaxSum = 0

  while (j <= arr.length) {
    const window = arr.slice(i, j) //
    tempMaxSum = window.reduce((acc, value) => acc + value, 0)

    // store the returned value in a variable currentMaxSum, only update if a returned sum is greater than the current one, and reset it
    if (tempMaxSum > maxSum) {
      maxSum = tempMaxSum
      tempMaxSum = 0
    }
    i++
    j++
  }

  // when `j` reach the end of the array, return the currentMaxSum
  return maxSum
}

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // ?
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // ?
maxSubarraySum([4, 2, 1, 6], 1) // ?
maxSubarraySum([4, 2, 1, 6, 2], 4) // ?
maxSubarraySum([], 4) // ?
