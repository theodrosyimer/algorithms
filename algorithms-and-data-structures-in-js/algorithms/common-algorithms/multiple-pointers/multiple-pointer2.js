function countUniquesValues(numbers) {
  if (numbers === undefined) {
    return -1
  }

  if (numbers.length === 0) {
    return 0
  }

  let p1 = 0
  let p2 = 0
  let end = numbers.length
  let count = 0

  while (p1 < end) {
    if (numbers[p1] !== numbers[p2]) {
      count += 1
      p1 = p2
    }

    if (numbers[p1] === numbers[p2]) {
      p2++
    }
  }

  return count
}

console.log(countUniquesValues())
console.log(countUniquesValues([]))
console.log(countUniquesValues([1,1,1,1,2]))
console.log(countUniquesValues([1,2,3,4,4,4,4,7,12,12,13]))
console.log(countUniquesValues([-2,-1,-1,0,1]))
