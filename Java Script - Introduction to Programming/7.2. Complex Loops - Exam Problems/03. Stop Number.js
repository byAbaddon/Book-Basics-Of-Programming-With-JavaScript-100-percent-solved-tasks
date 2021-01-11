function stopNumber(stopNum) {
  let numList = []
  
  for (let i = 1111; i <= 9999; i++) {
    let [a, b, c, d] = [...i.toString().split('').map(Number)]
    if (stopNum % a == 0 && stopNum % b == 0 && stopNum % c == 0 && stopNum % d == 0) {
      numList.push('' + a + b + c + d)
    }
  }

  return numList.join(' ')
}

//  console.log(stopNumber(3))


//----------------------------------------------(2)-------------------------------------------
function specialNumbers(stopNum) {

  let numList = []

  for (let a = 1; a <= 9; a++) {
    for (let b = 1; b <= 9; b++) {
      for (let c = 1; c <= 9; c++) {
        for (let d = 1; d <= 9; d++) {
          if (stopNum % a == 0 && stopNum % b == 0 && stopNum % c == 0 && stopNum % d == 0) {
            numList.push('' + a + b + c + d)
          }
        }
      }
    }
  }
  
  return numList.join(' ')
}

// console.log(specialNumbers(3))
