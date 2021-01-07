function oddEvenSum(arg) {
  arg = arg.map(Number)
  let [odd, even] = [0, 0]

  for (var i = 1; i <= arg[0]; i++) {
    i % 2 == 0 ? even += arg[i] : odd += arg[i]
  }

  if (even === odd)
    return `Yes\nSum = ${even}`
  return `No\nDiff = ${Math.abs(even - odd)}`
}

//console.log(oddEvenSum([4, 10, 50, 60, 20]))