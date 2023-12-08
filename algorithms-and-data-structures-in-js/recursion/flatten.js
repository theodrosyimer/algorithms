const flatten = array => {
  if (array.length === 0) return undefined

  const result = []

  const addToResult = arr => {
    if (arr.length === 0) return
    const newArr = arr[0]

    if (Array.isArray(newArr)) {
      if (newArr.length > 0) {
        result.push(newArr[0]) // ?
        result
        addToResult(newArr.slice(1)) // ?
      }
      addToResult(arr.slice(1)) // ?
    }
    if (!Array.isArray(newArr)) {
      arr
      result.push(newArr) // ?
      addToResult(arr.slice(1)) // ?
    }
  }

  addToResult(array)
  return result
}

// flatten([1, 2, 3, [4, 5]]) // ?
// flatten([1, [2, [3, 4], [[5]]]]) // ?
// flatten([[1], [2], [3]]) // ?
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // ?
