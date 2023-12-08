/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
// from: [Coding a JavaScript Interview Question-(Youtube)](https://www.youtube.com/watch?v=IQtdvow_DIE&t=36s)

const example = {
  data: 'a',
  next: {
    data: 'b',
    next: {
      data: 'c',
      next: {
        data: 'd',
        next: {
          data: 'e',
          next: {
            data: 'f',
            next: {
              data: 'g',
              next: {
                data: 'h',
                next: null,
              },
            },
          },
        },
      },
    },
  },
}

// Without using an Array

// using `while` loop
// source: https://twitter.com/antichrist65535/status/1600446347844366337/photo/1
const lastThree3 = example => {
  let x
  let y
  let z
  while (example) {
    ;({ data: x, next: example } = example)
    ;[x, y, z] = [y, z, x]
  }
  return [x, y, z]
}
console.log(lastThree3(example))

// using recursion
// source: https://twitter.com/muxfdz/status/1598035686455508992/photo/1
const lastThree4 = (input, x, y, z) => {
  if (input == null) {
    return [x, y, z]
  }
  return lastThree4(input.next, y, z, input.data)
}

console.log(lastThree4(example))

// Using an Array

// first attempt: using recursion
const lastThree = example => {
  const result = []

  const getNextValue = obj => {
    if (obj.next === null) {
      result.push(obj.data)
      return
    }
    if ('next' in obj) {
      result.push(obj.data)
      getNextValue(obj.next)
    }
  }
  getNextValue(example)
  return result.slice(-3)
}
console.log(lastThree(example))

// using a `while` loop
const lastThree2 = example => {
  const result = []

  let current = example
  while (current) {
    result.push(current.data)
    current = current.next
  }
  return result.slice(-3)
}
console.log(lastThree2(example))
