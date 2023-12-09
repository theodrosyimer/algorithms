// Only works with sorted data, otherwise use another way (i.e., linear search for unsorted arrays)

// Original Solution
function binarySearch2(arr, elem) {
  let left = 0
  let right = arr.length - 1
  let middle = Math.floor((left + right) / 2)

  if (arr[middle] === elem) return middle

  while (arr[middle] !== elem && left <= right) {
    if (elem < arr[middle]) {
      right = middle - 1
    } else {
      left = middle + 1
    }
    middle = Math.floor((left + right) / 2)
  }

  return -1
}

binarySearch2([2, 5, 6, 9, 13, 15, 28, 30], 103) // ?
binarySearch2([4], 0) // ?
binarySearch2([1, 2, 3, 4, 5, 6, 10, 13, 14, 24, 25, 35, 47], 13) // ?
binarySearch2([1, 2, 3, 4, 5, 6, 10, 13, 14, 24, 25, 35, 47], 1) // ?
binarySearch2([1, 2, 3, 4, 5, 6, 10, 13, 14, 24, 25, 35, 47], 3) // ?

// can be written like this
function binarySearch3(arr, elem) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    if (arr[middle] === elem) return middle

    if (arr[middle] < elem) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }

  return -1
}

binarySearch3([2, 5, 6, 9, 13, 15, 28, 30], 103) // ?
binarySearch3([4], 0) // ?
binarySearch3([1, 2, 3, 4, 5, 6, 10, 13, 14, 24, 25, 35, 47], 13) // ?
binarySearch3([1, 2, 3, 4, 5, 6, 10, 13, 14, 24, 25, 35, 47], 1) // ?
binarySearch3([1, 2, 3, 4, 5, 6, 10, 13, 14, 24, 25, 35, 47], 3) // ?

// my solution
const binarySearch = (array, value) => {
  if (array.length === 0) return

  let result = -1
  let left = 0
  let right = array.length // ?
  let mid = 0

  while (left < right) {
    if ((right + left) % 2 === 0) {
      mid = (right + left) / 2 // ?
    } else {
      mid = (right - 1 + left) / 2 // ?
    }

    if (array[mid] === value) {
      result = mid // ?
      break
    }

    if (array[left] === value) {
      result = left // ?
      break
    }

    if (array[right] === value) {
      result = right // ?
      break
    }

    if (array[mid] > value) {
      right = mid - 1
    }

    if (array[mid] < value) {
      left = mid + 1 // ?
    }
  }
  return result
}

binarySearch([4], 0) // ?
binarySearch([1, 2, 3, 4, 5, 6, 10, 13, 14, 24, 25, 35, 47], 13) // ?
binarySearch([1, 2, 3, 4, 5, 6, 10, 13, 14, 24, 25, 35, 47], 1) // ?
binarySearch([1, 2, 3, 4, 5, 6, 10, 13, 14, 24, 25, 35, 47], 3) // ?
