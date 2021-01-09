function axe([n]) {
  n = +n
  let width = 5 * n
  let leftDashes = 3 * n
  let middleDashes = 0
  let rightDashes = width - leftDashes - middleDashes - 2

  //top
  for (let i = 0; i < n; i++) {
    console.log(`${'-'.repeat(leftDashes)}*${'-'.repeat(middleDashes)}*${'-'.repeat(rightDashes)} `)
    middleDashes++
    rightDashes--
  }
  //middle
  let axeHeight = Math.trunc(n / 2)

    middleDashes--
    rightDashes++
    leftDashes++
  for (let i = 0; i < axeHeight; i++) {
    console.log(`${'*'.repeat(leftDashes)}${'-'.repeat(middleDashes)}*${'-'.repeat(rightDashes)}`)
   
  }

  //bottom part one
  leftDashes--
  for (let i = 0; i < axeHeight - 1; i++) {
    console.log(`${'-'.repeat(leftDashes)}*${'-'.repeat(middleDashes)}*${'-'.repeat(rightDashes)}`)
    middleDashes += 2
    leftDashes--
    rightDashes--
  }

  //bottom part two
  console.log(`${'-'.repeat(leftDashes)}*${'*'.repeat(middleDashes)}*${'-'.repeat(rightDashes)}`)
}

//axe(['2'])
//axe(['5'])
//axe(['7'])
//axe(['8'])

//----------------------------------------------------------(2)------------ WTF  ??? Fucking JUDGE
function axe([n]) { 
  n = +n

  for (let i = 0; i < n; i++) {
    console.log(`${'-'.repeat(3 * n)}*${'-'.repeat(i)}*${'-'.repeat( 2 * n - 2 - i)}`)
  }

  for (let i = 0; i < n / 2; i++) {
    console.log(`${'*'.repeat(n * 3)}*${'-'.repeat(n - 1)}*${'-'.repeat(n - 1)}`)
  }

  for (let i = 0; i < n / 2; i++) {
    if (i == Math.trunc(n / 2 - 1)) {
      console.log(`${'-'.repeat(3 * n - i)}*${'*'.repeat( n - 1 + (i * 2))}*${'-'.repeat(n - 1 - i)}`)
      break
    } else {
      console.log(`${'-'.repeat(n * 3 - i)}*${'-'.repeat(n - 1 + i + i)}*${'-'.repeat(n - 1 - i)}`)
    }
  }
}

// axe(['2'])
// axe(['5'])
// axe(['7'])
// axe(['8'])
// axe(['9'])
// axe(['11'])