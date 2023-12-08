const linearSearch = (array, value) => {
  if (!array.length) return undefined

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i
  }

  return -1
}

linearSearch([1, 6, 3, 4, 5, 6], 4) // ?
linearSearch([1, 2, 13, 4, 5, 7], 13) // ?
linearSearch([1, 5, 3, 4, 12, 6], 10) // ?
