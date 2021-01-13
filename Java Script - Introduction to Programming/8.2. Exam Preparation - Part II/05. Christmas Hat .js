function christmasHat(n) {
   //draw top
  console.log('.'.repeat(n * 2 - 1) +'/|\\' + '.'.repeat(n * 2 - 1))
  console.log('.'.repeat(n * 2 - 1) +'\\|/' + '.'.repeat(n * 2 - 1))
  console.log('.'.repeat(n * 2 - 1) +'***' + '.'.repeat(n * 2 - 1))
  //draw middle
  for (let i = 0; i < n * 2 - 1; i++) {
     console.log('.'.repeat(Math.abs(n * 2 - 2 - i)) + '*' + '-'.repeat(i + 1) + '*' + '-'.repeat(i + 1) + '*' + '.'.repeat(Math.abs(n * 2 - 2 - i)))
  }
 //bottom
  console.log('*'.repeat(n * 4 + 1))
  console.log('*.'.repeat(n * 2 ) + '*')
  console.log('*'.repeat(n * 4 + 1))
}

// christmasHat(['4'])
// christmasHat(['7'])