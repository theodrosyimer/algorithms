const reverse = string => {
  let result = ''
  const str = [...string]

  const remove = s => {
    if (s.length === 0) {
      return result
    }
    result = result.concat(s.pop()) // ?
    remove(s)
  }
  remove(str)
  return result // ?
}

reverse('awesome') // ?
reverse('rithmschool') // ?
