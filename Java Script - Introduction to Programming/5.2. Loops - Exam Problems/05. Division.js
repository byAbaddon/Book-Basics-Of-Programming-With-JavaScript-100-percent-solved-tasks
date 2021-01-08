function division(arg) {
  arg = arg.map(Number)
  let loop = arg[0]
  let [counter2, counter3, counter4] = [0, 0, 0]

  for (let i = 1; i <= loop; i++) {
    if (arg[i] % 2 === 0) counter2++
    if (arg[i] % 3 === 0) counter3++
    if (arg[i] % 4 === 0) counter4++
  }
  console.log(((counter2 / loop) * 100).toFixed(2) + '%')
  console.log(((counter3 / loop) * 100).toFixed(2) + '%')
  console.log(((counter4 / loop) * 100).toFixed(2) + '%')
}

// division([3, 3, 6, 9])
// division([1, 12])


//--------------------------------------------------(2)-----------WTF ???  Fucking Judge--------------
function division(arg) {
  arg = arg.map(Number)
  let n = arg.shift()
  console.log((arg.filter(el => el % 2 == 0).length / n * 100).toFixed(2) + '%')
  console.log((arg.filter(el => el % 3 == 0).length / n * 100).toFixed(2) + '%')
  console.log((arg.filter(el => el % 4 == 0).length / n * 100).toFixed(2) + '%')
}


// division([3, 3, 6, 9])
// division([1, 12])