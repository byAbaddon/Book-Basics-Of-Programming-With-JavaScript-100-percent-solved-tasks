function leftAndRightSum([...arg]) {
  arg = arg.map(Number)

  let leftSum = arg.slice(1, arg[0] + 1).reduce((a, b) => a + b)
  let rightSum = arg.slice(arg[0] + 1, ).reduce((a, b) => a + b)

  if (leftSum === rightSum)
    return 'Yes, sum = ' + leftSum
  return 'No, diff = ' + Math.abs(Number(leftSum - rightSum))
}

// console.log(leftAndRightSum([2, 10, 90, 60, 40]))
// console.log(leftAndRightSum([2,  9, 90, 60, 40]))


//--------------------------------------(2)---------------------------------------
function leftRightSum(arg) {
  arg = arg.map(Number)
  let [leftSum, rightSum] = [0, 0]

  for (var i = 1; i <= arg[0]; i++) {
    leftSum += arg[i]
  }
  for (var i = arg[0] + 1; i <= arg[0] * 2; i++) {
    rightSum += arg[i]
  }

  if (leftSum === rightSum)
    return 'Yes, sum = ' + leftSum
  return 'No, diff = ' + Math.abs(Number(leftSum - rightSum))
}

// console.log(leftAndRightSum([2, 10, 90, 60, 40]))
// console.log(leftAndRightSum([2, 9, 90, 60, 40]))