function fib(n) {
  if (n <= 2) return 1
  return fib(n - 1) + fib(n - 2)
}

fib(4) // ?
fib(10) // ?

// my solution
const fib2 = num => {
  const lastResult = 1
  let result = 0
  const nth = (pos, last) => {
    if (pos === 0) return result

    result += last
    const lastIndex = result - last // ?

    nth(pos - 1, lastIndex)
  }

  nth(num, lastResult)
  return result
}

// fib2(4) // ?
// fib2(10) // ?
