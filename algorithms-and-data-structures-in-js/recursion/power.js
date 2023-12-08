function power(base, exponent) {
  if (exponent === 0) return 1
  return base * power(base, exponent - 1)
}

power(10, 2) // ?

// my solution
const power2 = (base, exp) => {
  let result = base
  const mul = (num, count) => {
    if (count === 1) return result
    result *= num
    mul(num, count - 1)
  }
  mul(base, exp)
  return result
}

power2(10, 2) // ?
