function computedClosestToZero(arr) {
  let closest = 0
  for (let i = 0; i < arr.length; i++) {
    if (closest === 0) {
      closest = arr[i]
    }
    if (arr[i] > 0 && arr[i] <= Math.abs(closest)) {
      closest = arr[i]
    }
    if (arr[i] < 0 && -arr[i] < Math.abs(closest)) {
      closest = arr[i]
    }
  }
  return closest
}

console.log(computedClosestToZero([1, -2, -8, 4, 5]))
