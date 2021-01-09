function sunglasses(n) {
  n = +n  //Fucking Judge
  function upDown() {
    console.log('*'.repeat(n * 2) + ' '.repeat(n) + '*'.repeat(n * 2))
  }
  //first row
  upDown(n)
  //middle part
  for (i = 0; i < n - 2; i++) {
    if (i === ~~((n - 1) / 2 - 1)) {
      console.log('*' + '/'.repeat(n + (n - 2)) + '*' + '|'.repeat(n) + '*' + '/'.repeat(n + (n - 2)) + '*')
    } else {
      console.log('*' + '/'.repeat(n + (n - 2)) + '*' + ' '.repeat(n) + '*' + '/'.repeat(n + (n - 2)) + '*')
    }
  }
  //second row
  upDown(n)
}

// sunglasses(3)