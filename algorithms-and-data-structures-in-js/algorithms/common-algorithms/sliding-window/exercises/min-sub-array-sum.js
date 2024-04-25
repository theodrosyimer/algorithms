function minSubArrayLen1(nums, sum) {
  let total = 0
  let start = 0
  let end = 0
  let minLen = Infinity

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end] // ?
      end++ // ?
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start) // ?
      total -= nums[start] // ?
      start++ // ?
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break
    }
  }

  return minLen === Infinity ? 0 : minLen
}

minSubArrayLen1([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // ?
minSubArrayLen1([2, 1, 6, 5, 4], 9) // ?
// minSubArrayLen1([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // ?
// minSubArrayLen1([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // ?
minSubArrayLen1([1, 1, 4, 10, 5, 7, 8, 9, 10], 19) // ?

// my recursive solution :(
const minSubarraySum = (arr, n) => {
  const start = 0
  const range = 1
  let tempSum = 0
  let tempArr = []
  let result = []
  let copyArr = [...arr] // ?

  const searchSumForTwoOrMoreNumbers = (arr1, s, r) => {
    tempArr = arr1.splice(s, r) // ?

    for (let i = 0; i < tempArr.length; i++) {
      tempSum += tempArr[i] // ?
    }

    if (r <= arr.length) {
      if (tempSum < n) {
        if (s === arr.length) {
          r += 1 // ?
          s = 0 // ?

          tempSum = 0
          tempArr = []
          copyArr = [...arr] // ?

          searchSumForTwoOrMoreNumbers(copyArr, s, r)
        }
        s += 1 // ?
        tempSum = 0
        tempArr = []
        copyArr = [...arr] // ?

        searchSumForTwoOrMoreNumbers(copyArr, s, r)
      }
      if (tempSum >= n) {
        result = tempArr
        return
      }
      if (r === arr.length) {
        tempArr.length = 0
      }
      return result
    }
  }

  searchSumForTwoOrMoreNumbers(copyArr, start, range)
  result = tempArr
  return result.length
}

// minSubarraySum([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // ?
// minSubarraySum([2, 1, 6, 5, 4], 9) // ?
// minSubarraySum([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // ?
// minSubarraySum([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // ?
// minSubarraySum([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) // ?
