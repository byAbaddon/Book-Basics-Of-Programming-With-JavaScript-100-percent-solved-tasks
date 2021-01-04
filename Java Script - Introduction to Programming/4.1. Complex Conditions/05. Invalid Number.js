function invalidNumber([n]) {
  n = Number(n)
  return n >= 100 && n <= 200 || n === 0 ? '' : 'invalid'
}

//console.log(invalidNumber([201]))