function numberPyramid(n) {
  let current = 1
  let result = ''

  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      result += current + ' '
      current++
      if (current > n) {
        console.log(result)
        return
      }
    }

    console.log(result)
    result = ''
  }
}

// numberPyramid(7)