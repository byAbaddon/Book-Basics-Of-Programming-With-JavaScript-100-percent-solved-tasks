function house(n) {

  if (n === 2) return `**\n||`

  let star = 1
  if ((n & 1) === 0) star = 2

  //draw top
  if ((n & 1) === 0) {
    for (i = 1; i < (n / 2); i++) { //draw up  even
      console.log('-'.repeat(n / 2 - i) + '*'.repeat(i * 2) + '-'.repeat((n / 2 - i)))
    }
  } else {
    for (i = 1; i < (n / 2); i++) { //draw up odd
      console.log('-'.repeat(Math.ceil(n / 2) - i) + '*'.repeat(i * 2 - 1) + '-'.repeat(Math.ceil(n / 2) - i))
    }
  }

  //draw middle part
  console.log('*'.repeat(n))

  //draw bottom
  if ((n & 1) === 0) {
    for (i = 0; i < n / 2; i++) {
      console.log('|' + '*'.repeat(n - 2) + '|')
    }
  }

  if ((n & 1) !== 0) {
    for (i = 0; i < n / 2 - 1; i++) {
      console.log('|' + '*'.repeat(n - 2) + '|')
    }
  }
}

// house(7)