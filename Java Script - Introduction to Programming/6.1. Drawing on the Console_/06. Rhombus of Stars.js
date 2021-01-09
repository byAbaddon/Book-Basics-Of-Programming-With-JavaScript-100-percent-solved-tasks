function rhombusOfStars(n) {
  //first part
  for (i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '* '.repeat(i))
  }
  //second part
  for (i = n - 1; i >= 1; i--) {
    console.log(' '.repeat(n - i) + '* '.repeat(i))
  }
}

//rhombusOfStars(['4'])