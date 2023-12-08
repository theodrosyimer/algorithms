function twoSumsFirstOnly(numberList, target) {
  const prevHashmap = {}

  for (let i = 0; i < numberList.length; i++) {
    const diff = target - numberList[i]

    if (diff in prevHashmap) {
      return [prevHashmap[diff], i]
    }
    prevHashmap[numberList[i]] = i
  }
  return -1
}

function twoSumsAll(numberList, target) {
  const prevHashmap = {}
  const results = []

  for (let i = 0; i < numberList.length; i++) {
    const diff = target - numberList[i]

    if (diff in prevHashmap) {
      results.push([prevHashmap[diff], i])
    }
    prevHashmap[numberList[i]] = i
  }
  return results.length ? results : -1
}

const start = performance.now()
const result = twoSumsFirstOnly([1, 2, 3, 7, 4, 11, 15, 13], 18)
const timeExecution = performance.now() - start

const start2 = performance.now()
const result2 = twoSumsAll([1, 2, 3, 7, 4, 11, 15, 13], 18)
const timeExecution2 = performance.now() - start2

console.table([
  {
    result,
    timeExecution,
  },
  {
    result: result2,
    timeExecution: timeExecution2,
  },
])
