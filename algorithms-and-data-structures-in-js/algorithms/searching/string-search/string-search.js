function naiveSearch(string, query) {
  let count = 0
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < query.length; j++) {
      if (query[j] !== string[i + j]) break
      if (j === query.length - 1) count++
    }
  }
  return count
}

naiveSearch('lorie loled', 'ed') // ?

// const str1 = 'am'
// const str2 = 'i am am string'

// const stringSearch = (strToMatch, data) => {
//   let count = 0
//   let j = 0
//   let letterToMatchCount = strToMatch.length // ?
//   let letterToMatch = strToMatch[j] // ?

//   for (let i = 0; i < data.length; i++) {
//     if (data[i] === letterToMatch) {
//       if (j < strToMatch.length) {
//         if (data[i + 1] !== strToMatch[j + 1]) {
//           j = 0
//           letterToMatch = strToMatch[j] // ?
//           letterToMatchCount = strToMatch.length // ?
//         } else {
//           letterToMatchCount -= 1 // ?
//           j += 1 // ?
//           letterToMatch = strToMatch[j] // ?
//         }
//       }
//       if (j === strToMatch.length) {
//         if (data[i + 1] !== strToMatch[j]) {
//           j = 0
//           letterToMatch = strToMatch[j] // ?
//           letterToMatchCount = strToMatch.length // ?
//         } else {
//           letterToMatchCount -= 1 // ?
//           j += 1 // ?
//           letterToMatch = strToMatch[j] // ?
//         }
//       }

//       if (letterToMatchCount === 0) {
//         count += 1 // ?
//         j = 0
//         letterToMatch = strToMatch[j] // ?
//         letterToMatchCount = strToMatch.length // ?
//       }
//     }
//   }
//   return count
// }

// stringSearch(str1, str2) // ?
