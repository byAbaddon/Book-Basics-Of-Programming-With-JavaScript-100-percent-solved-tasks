function pointInFigure([...arg]) {
  let [x, y] = [...arg.map(Number)]

  if (x >= 4 && x <= 10 && y >= -5 && y <= 3 || x >= 2 && x <= 12 && y >= -3 && y <= 1) {
    console.log('in')
  } else {
    console.log('out')
  }
}

// pointInFigure(['3', '-1'])
// pointInFigure(['8', '-5'])