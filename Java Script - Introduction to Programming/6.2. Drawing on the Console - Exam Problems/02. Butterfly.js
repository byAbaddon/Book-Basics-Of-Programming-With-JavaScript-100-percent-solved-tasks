function butterfly(n) {
  //top part
  for (i = 0; i < n - 2; i++) {
    if (i % 2 === 0) {
      console.log('*'.repeat(n - 2) + '\\' + ' ' + '/' + '*'.repeat(n - 2))
    } else {
      console.log('-'.repeat(n - 2) + '\\' + ' ' + '/' + '-'.repeat(n - 2))
    }
  }
  //middle part
  console.log(' '.repeat(n - 1) + '@')

  //bottom part
  for (i = 0; i < n - 2; i++) {
    if (i % 2 === 0) {
      console.log('*'.repeat(n - 2) + '/' + ' ' + '\\' + '*'.repeat(n - 2))
    } else {
      console.log('-'.repeat(n - 2) + '/' + ' ' + '\\' + '-'.repeat(n - 2))
    }
  }
}

// butterfly(7)