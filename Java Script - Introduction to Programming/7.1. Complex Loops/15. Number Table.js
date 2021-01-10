function numberTable(n) {
  let result = ''

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n; j++) {
      let s = i + j

      if (s > n) {
        s = 2 * n - s
      }
      result += s + ' '
    }

    console.log(result)
    result = ''
  }

}

// numberTable(6)