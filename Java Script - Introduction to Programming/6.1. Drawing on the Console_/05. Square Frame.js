function squareFrame(n) {
  //top row
  console.log('+' + (' -'.repeat(n - 2) + ' +'))
 //middle 
  for (i = 0; i < n - 2; i++) {
    console.log('|' + (' -'.repeat(n - 2) + ' |'))
  }
 //bottom row
  console.log('+' + (' -'.repeat(n - 2) + ' +'))
}

//squareFrame(['3'])