function arrow([n]) {
  n = +n
  //top part
  console.log('.'.repeat(n / 2) + '#'.repeat(n) + '.'.repeat(n / 2))
  //under top
  for (i = 0; i < n - 2; i++) {
    console.log('.'.repeat(n / 2) + '#' + '.'.repeat(n - 2) + '#' + '.'.repeat(n / 2))
  }
  // middle part
  console.log('#'.repeat(n / 2 + 1) + '.'.repeat(n - 2) + '#'.repeat(n / 2 + 1))
  // before bottom
  let dot = 0
  for (i = 1; i <= n - 2; i++) {

    console.log('.'.repeat(i) + '#' + '.'.repeat(Math.abs(n * 2 - 5 - dot)) + '#' + '.'.repeat(i))
    dot += 2
  }
  //bottom
  console.log('.'.repeat(n - 1) + '#' + '.'.repeat(n - 1))
}

// arrow(['3'])