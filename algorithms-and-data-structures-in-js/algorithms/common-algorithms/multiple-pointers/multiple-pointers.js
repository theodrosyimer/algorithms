// accept only sorted array!
const sumZero = arr => {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    const sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    }
    if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

sumZero([-4, -3, -2 - 1, 0, 1, 2, 3, 5, 10]) // ?

// a function that accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted
function countUniqueValues(arr) {
  if (arr.length === 0) return 0
  let i = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}
countUniqueValues([1, 2, 2, 5, 7, 7, 99]) // ?

// my solution
const countUniqueValues2 = arr => {
  let p1 = 0
  let p2 = 0
  let count = 0

  while (p1 < arr.length) {
    if (arr[p1] === arr[p2]) {
      p2 += 1
    }
    if (arr[p1] !== arr[p2]) {
      p1 = p2
      count += 1
    }
  }
  return count
}

countUniqueValues2([1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 7]) // ?
