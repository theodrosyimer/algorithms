// q: can you create a very long string random characters from a-z that does  repeat the same character one time in a chunk of 4 characters except for one chunk somewhere in the string

const problem = 'abcabcabbfaefafgafgaf'

function solution(problemString) {
  let start, cursor
  let rangeEndIndex = calculateRangeEndIndex(0)

  let foundTotal = 0
  for (start = 0; start < problemString.length; start++) {
    for (cursor = start + 1; cursor <= rangeEndIndex; cursor++) {

      console.log('start', start,'cursor', cursor, 'rangeEndIndex', rangeEndIndex);

      if (problemString[start] === problemString[cursor]) {
        foundTotal++

        console.log(`\n${foundTotal} same character found:`);
        console.log(
          `${problemString[start]} === ${problemString[cursor]}`,
          problemString[start] === problemString[cursor]
        );

        console.log(
          `no solution within that range start: ${start} and cursor: ${cursor}\n`);

        console.log(
          `going to next 4 characters from start: ${start + 1} and range end: ${rangeEndIndex + 1}\n`
        );
        console.log('-'.repeat(80), '\n');

        if(){}

        // start = start + 1
        // cursor = start + 1
        break
      }

      if (cursor === rangeEndIndex && start < rangeEndIndex - 1) {
         if (foundTotal === 0) {
          console.log('rangeEndIndex', rangeEndIndex);
          return problemString.slice(start, rangeEndIndex)
        }

        console.log('going for the next character');
        rangeEndIndex
        break
      }

      if (start === rangeEndIndex - 1) {
         if (foundTotal === 0) {
          console.log('rangeEndIndex', rangeEndIndex);
          return problemString.slice(start, rangeEndIndex)
        }

        console.log('calculateRangeStartIndex(cursor)', calculateRangeStartIndex(start));
        rangeEndIndex = calculateRangeEndIndex(rangeEndIndex++)
        break
      }

      console.log(
        `${problemString[start]} === ${problemString[cursor]}`,
        problemString[start] === problemString[cursor]
      );

      // return 'no solution'
    }

  }
  return problemString.slice(start, cursor + 1)

  function calculateRangeEndIndex(index) {
    // console.log('index', index);
    return index < problemString.length ? index + 3 : problemString.length - 1
  }

  function calculateRangeStartIndex(index) {
    return index > 0 ? index + 1 : 0
  }
}

console.log(`solution: ${solution(problem)}`);
console.log(`Result: ${solution(problem) === 'bfae' ? 'pass' : 'fail'}`);
