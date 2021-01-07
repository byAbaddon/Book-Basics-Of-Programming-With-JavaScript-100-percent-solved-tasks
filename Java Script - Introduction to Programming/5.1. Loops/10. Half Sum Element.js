function halfSumElement(arg) {
  arg = arg.map(Number)
  arg.shift()
  let sortedList = arg.sort((a, b) => a - b)
  let biggestNumber = sortedList.pop()
  let allSum = sortedList.reduce((a, b) => a + b)
  return allSum === biggestNumber ? `Yes\nSum = ${biggestNumber}` : `No\nDiff = ${Math.abs(allSum - biggestNumber)}`
}

//console.log(halfSumElement([7, 3, 4, 1, 1, 2, 12, 1]))
// console.log(halfSumElement([4, 6, 1, 2, 3]))