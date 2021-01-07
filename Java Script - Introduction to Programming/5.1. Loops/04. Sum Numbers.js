function sumNumbers([...arg]) {
  let sum = 0
  for (var i = 1; i < arg.length; i++) {
    sum += Number(arg[i])
  }

  return sum
}

// console.log(sumNumbers([2, 10, 20]))
