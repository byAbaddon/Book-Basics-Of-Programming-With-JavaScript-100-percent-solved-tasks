function lettersCombinations([...arg]) {
  let [n1, n2, n3] = [...arg.map(el => el.charCodeAt())]

  let res = ' '
  let count = 0

  for (let i = n1; i <= n2; i++) {
    for (let j = n1; j <= n2; j++) {
      for (let k = n1; k <= n2; k++) {
        if (i !== n3 && j !== n3 && k !== n3) {
          res += String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k) + ' '
          count++;
        }
      }
    }
  }

  return res + count
}

console.log(lettersCombinations(['a', 'c', 'b']))
console.log(lettersCombinations(['a', 'c', 'z']))