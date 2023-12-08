const isOdd = val => val % 2 !== 0

const someRecursive = (array, callback) => {
  if (array.length === 0) return false
  let result = false

  const checkThisNum = arr => {
    if (arr.length === 0) return

    if (isOdd(arr[0])) {
      result = true
      return
    }
    if (!isOdd(arr[0])) {
      checkThisNum(arr.slice(1))
    }
  }

  checkThisNum(array)
  return result
}

someRecursive([1, 2, 3, 4], isOdd) // ?
someRecursive([4, 6, 8, 9], isOdd) // ?
someRecursive([4, 6, 8], isOdd) // ?
someRecursive([4, 6, 8], val => val > 10) // ?
