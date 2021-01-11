function specialNumbers([...arg]) {
  let [n, m, s] = [...arg.map(Number)]
  let numberList = []

  for (let i = m; i >= n; i--) {
    if (i % 2 === 0 && i % 3 === 0) {
      if (i === s) {
        break;
      }
      numberList.push(i)
    }
  }

  return numberList.join(' ')
}

//console.log(specialNumbers([1, 30, 15]))