const recursiveRange = num => {
  let result = 0

  const add = n => {
    if (n === 0) return result
    result += n
    add(n - 1)
  }
  add(num)
  return result
}

recursiveRange(17) // ?
recursiveRange(10) // ?
