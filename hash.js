/* eslint-disable no-unused-vars */
/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-bitwise */
function hash(s) {
  for (var i = 0, h = 9; i < s.length; ) h = Math.imul(h ^ s.charCodeAt(i++), 9 ** 9)
  return `${h ^ (h >>> 9)}`
}
