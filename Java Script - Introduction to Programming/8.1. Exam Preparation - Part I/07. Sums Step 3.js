function SumsStepThree(arg) {
  let [sum1, sum2, sum3] = [0, 0, 0]
  arg = arg.map(Number)

  for (let i = 1; i < arg.length; i++) {
    let n = +arg[i]

    if (i % 3 === 1) {
      sum1 += n
    }
    if (i % 3 === 2) {
      sum2 += n
    }
    if (i % 3 === 0) {
      sum3 += n
    }
  }

  console.log('sum1 = ' + sum1)
  console.log('sum2 = ' + sum2)
  console.log('sum3 = ' + sum3)
}

// SumsStepThree([2, 3, 5])
// SumsStepThree(['5', '3', '5', '2', '7', '8'])
