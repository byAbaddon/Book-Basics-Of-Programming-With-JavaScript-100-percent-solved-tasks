function oddEvenPos(arg) {
  let loop = Number(arg[0])
  let [oddSum, oddMin, oddMax] = [0, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]
  let [evenSum, evenMin, evenMax] = [0, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]

  for (let i = 1; i <= loop ;i++) {
    let num = Number(arg[i])
    if (i & 1) {
      oddSum += num
      if (num > oddMax) oddMax = num
      if (num < oddMin) oddMin = num

    } else {
      evenSum += num
      if (num > evenMax) evenMax = num
      if (num < evenMin) evenMin = num
    }
  }

  if (oddMin === Number.MAX_SAFE_INTEGER) oddMin = 'No'
  if (evenMin === Number.MAX_SAFE_INTEGER) evenMin = 'No'
  if (oddMax === Number.MIN_SAFE_INTEGER) oddMax = 'No'
  if (evenMax === Number.MIN_SAFE_INTEGER) evenMax = 'No'


  return `OddSum = ${oddSum}\nOddMin = ${oddMin}\nOddMax = ${oddMax}\nEvenSum = ${evenSum}\nEvenMin = ${evenMin}\nEvenMax = ${evenMax}`
}

// console.log(oddEvenPos([6, 2, 3, 5, 4, 2, 1]))
// console.log(oddEvenPos([2, 1.5, -2.5]))




//----------------------------------------(2)---------------------------------WTF ????
// function oddEvenPosition(arg) {       
//   arg.shift()
//   arg = arg.map(Number)
//   let evenPositions = arg.filter((el, index) => index % 2 === 0)
//   let oddPositions = arg.filter((el, index) => index & 1)

//   function result(arr, str) {
//     sum = arr.reduce((a, b) => a + b)
//     min = Math.min(...arr)
//     max = Math.max(...arr)
//     return `${str}Sum=${sum},\n${str}Min=${min},\n${str}Max=${max},`
//   }

//   if (!oddPositions.length)
//     return `${result(evenPositions, 'Odd')}\nOddSum=0,\nOddMin=No,\nOddMax=No,`
//   else if (!evenPositions.length)
//     return `${result(oddPositions, 'Even')}\nEvenSum=0,\nEvenMin=No,\nEvenMax=No,`
//   else
//     return `${result(evenPositions, 'Odd')}\n${result(oddPositions, 'Even')}`
// }


//console.log(oddEvenPosition(['6', '2', '3', '5', '4', '2', '1']))
//console.log(oddEvenPosition(['1', '1']))
// console.log(oddEvenPosition(['1', '-5']))
//console.log(oddEvenPosition(['5', '3', '-2', '8', '11', '-3']))
//oddEvenPosition(['0'])