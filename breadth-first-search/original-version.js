const toCamelCase = string => {
  const arr = string.slice().split(' ')
  // eslint-disable-next-line newline-per-chained-call
  const firstWord = arr.splice(0, 1).join().toLowerCase()
  const rest = arr
    .map(x => `${x.substring(0, 1).toUpperCase()}${x.substring(1).toLowerCase()}`)
    .join('')

  return `${firstWord}${rest}`
}
