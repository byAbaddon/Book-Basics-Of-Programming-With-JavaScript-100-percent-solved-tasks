function greatestCommonDivisor([...arg]) {
  let [a, b] = [...arg]

  while (b !== 0) {
    let divisor = b
    b = a % b
    a = divisor
  }

  console.log(a)
}

// greatestCommonDivisor([100, 88])