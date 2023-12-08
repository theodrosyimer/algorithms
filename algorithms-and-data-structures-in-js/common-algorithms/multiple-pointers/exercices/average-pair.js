/*
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
*/

function averagePair2(arr, num) {
  let start = 0
  let end = arr.length - 1
  while (start < end) {
    const avg = (arr[start] + arr[end]) / 2
    if (avg === num) return true
    if (avg < num) start++
    else end--
  }
  return false
}

averagePair2([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // ?
averagePair2([1, 2, 3], 2.5) // ?
averagePair2([-1, 0, 3, 4, 5, 6], 4.1) // ?
averagePair2([-1, 0, 3, 4, 5, 6, 12], 9) // ?

// my solution
const averagePair = (arr, avg) => {
  if (arr.length === 0) {
    return false
  }
  let p1 = 0
  let p2 = 1
  let temp = -Infinity

  for (p2; p1 < arr.length; p2++) {
    if (temp === avg) return true

    if (p2 < arr.length) {
      temp = (arr[p1] + arr[p2]) / 2 // ?
    }
    if (p2 === arr.length) {
      p1 += 1
      p2 = p1
    }
  }

  return false
}

averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // ?
averagePair([1, 2, 3], 2.5) // ?
averagePair([-1, 0, 3, 4, 5, 6], 4.1) // ?
averagePair([-1, 0, 3, 4, 5, 6, 12], 9) // ?
