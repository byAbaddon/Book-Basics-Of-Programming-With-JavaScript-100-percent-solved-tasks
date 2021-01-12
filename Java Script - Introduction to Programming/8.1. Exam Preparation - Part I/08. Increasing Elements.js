function increasingElements(arg) {
  arg = arg.map(Number)
  let countCurrentLongest = 0
  let countLongest = 0
  let numPrev = 0
  let current = 0

  for (let i = 1; i < arg.length; i++) {
      current = arg[i]

      if(current > numPrev) {
          countCurrentLongest++
      } else {
          countCurrentLongest = 1
      }

      if(countCurrentLongest > countLongest) {
          countLongest = countCurrentLongest
      }

      numPrev = current
  }

  console.log(countLongest)
}

// increasingElements(['5', '2', '4'])
//increasingElements(['4','2', '8', '7', '6'])
//increasingElements(['4', '1', '2', '4', '4'])
// increasingElements(['4','5', '6', '7', '8'])