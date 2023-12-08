function animals(heads, legs) {
  const cows = (legs - 2 * heads) / 2
  const chickens = heads - cows
  if (cows < 0 || chickens < 0 || cows % 1 !== 0 || chickens % 1 !== 0) {
    return 'No solutions'
  }
  return [chickens, cows]
}

animals(72, 200) /*?. $*/
