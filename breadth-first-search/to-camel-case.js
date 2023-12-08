import assert from 'assert'
import { describe, it } from 'node:test'

const toCamelCase = string => {
  const arr = string.slice().split(' ')
  // eslint-disable-next-line newline-per-chained-call
  const firstWord = arr.splice(0, 1).join().toLowerCase()
  const rest = arr
    .map(x => `${x.substring(0, 1).toUpperCase()}${x.substring(1).toLowerCase()}`)
    .join('')

  return `${firstWord}${rest}`
}

describe('Testing for different characters', () => {
  it('should work with spaces', () => {
    assert.strictEqual(
      toCamelCase('test ca aussi'),
      'testCaAussi',
      'test ca aussi != testCaAussi'
    )
  })
  it('should work with underscores', () => {
    assert.strictEqual(
      toCamelCase('test_ca_aussi'),
      'testCaAussi',
      'test ca aussi != testCaAussi'
    )
  })
  it('should work with dashes', () => {
    assert.strictEqual(
      toCamelCase('Lorem-ipsum-dolor'),
      'loremIpsumDolor',
      'Lorem ipsum dolor != loremIpsumDolor'
    )
  })
})
