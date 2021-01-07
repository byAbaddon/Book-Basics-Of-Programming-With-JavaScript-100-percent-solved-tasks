function equalPairs(arg) {                 //----------100pts
  arg = arg.map(Number)
  let numberОfPairs = arg[0] * 2           //WTF ???
  let [currentSum,  maxSum, maxDiff] = [ 0, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]
  for (let i = 1; i < numberОfPairs; i += 2) {

    let sum = arg[i] + arg[i + 1]
    if (sum > maxSum)   maxSum = sum

    if (i != 1) {
      let diff = Math.abs(sum - currentSum)
      if (diff > maxDiff) {
        maxDiff = diff
      }
    }
    currentSum = sum
  }

  if (maxDiff == 0 || maxDiff == Number.MIN_SAFE_INTEGER)
    return `Yes, value=${maxSum}`
  return `No, maxdiff=${maxDiff}`
}

//console.log(equalPairs(["3", "1", "2", "0", "3", "4", "-1"]))


//-----------------------------------------------------------(2)---------------87pts-----------------------

function equalPairs(arg) {
  arg = arg.map(Number)
  let numberОfPairs = arg[0] * 2 //Fucking Idiot 
  let numbersSet = new Set()

  for (let i = 1; i < numberОfPairs; i += 2) {
    numbersSet.add(arg[i] + arg[i + 1])
  }

  let maxDiff = Math.max(...numbersSet) - Math.min(...numbersSet)
  if (numbersSet.size == 1)
    return `Yes, value=${[...numbersSet]}`
  return `No, maxdiff=${maxDiff}`
}


//console.log(equalPairs(['3', '1', '2', '0', '3', '4', '-1']))
//console.log(equalPairs(['4', '1', '1', '3', '1', '2', '2', '0', '0']))
//console.log(equalPairs(['2', '-1', '0', '0', '-1']))
//console.log(equalPairs(['1', '5', '5']))
//console.log(equalPairs(['2', '-1', '2', '0', '-1']))