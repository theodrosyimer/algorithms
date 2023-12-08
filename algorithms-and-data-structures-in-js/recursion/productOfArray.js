function productOfArray(arr) {
  if (arr.length === 0) {
    return 1
  }
  return arr[0] * productOfArray(arr.slice(1))
}

productOfArray([1, 2, 3]) // ?
productOfArray([1, 2, 3, 10]) // ?

// my solution
const productOfArray2 = arr => {
  if (arr.length === 0) return 0
  let result = arr[0]

  const mul = array => {
    if (arr.length === 1) return result
    result *= arr.pop() // ?
    arr.slice(1)
    mul(array)
  }
  mul(arr)
  return result
}

productOfArray2([1, 2, 3]) // ?
// productOfArray2([1, 2, 3, 10]) // ?
