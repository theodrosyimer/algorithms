/* eslint-disable */

// areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates() {
  const collection = {}
  for (const val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for (const key in collection) {
    if (collection[key] > 1) return true
  }
  return false
}

// There is a version using multiple pointers

// areThereDuplicates One-Liner Solution
function areThereDuplicates3(...args) {
  return new Set(args).size !== args.length
}
areThereDuplicates3(1, 2, 3, 5, 5) // ?

// my solution using frequency counter
const areThereDuplicates4 = (...args) => {
  const lookup = {}

  for (const arg of args) {
    lookup[arg] = (lookup[arg] || 0) + 1
    if (lookup[arg] > 1) {
      return true
    }
  }
  return false
}

areThereDuplicates4(1, 2, 3, 3) // ?
