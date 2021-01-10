function evenPowersOf2(n) {
  let sum = 1
  for (i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(sum)
    }
    sum *= 2
  }
}


//evenPowersOf2(10)