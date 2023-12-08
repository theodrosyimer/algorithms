// my solution
const isPalindrome = string => {
  const str = [...string]

  if (str.length === 0) return false

  const first = 0
  let mid = 0
  let last = 0
  let result = false

  if (str.length % 2 === 0) {
    mid = str.length / 2 // ?
    if (str[mid] !== str[mid + 1]) {
      return false
    }
  } else {
    mid = (str.length - 1) / 2 // ?
  }

  const checkEquality = s => {
    last = s.length - 1
    if (s.length === 0) return

    if (first === mid) return

    if (s[first] === s[last]) {
      result = true
    }
    if (s[first] !== s[last]) {
      return
    }
    s.pop()
    checkEquality(s.slice(1))
  }
  checkEquality(str)
  return result
}

isPalindrome('awesome') // ?
isPalindrome('foobar') // ?
isPalindrome('tacocat') // ?
isPalindrome('amanaplanacanalpanama') // ?
isPalindrome('amanaplanacanalpandemonium') // ?
