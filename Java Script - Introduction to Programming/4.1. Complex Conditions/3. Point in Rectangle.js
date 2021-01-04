function pointInRectangle([...arg]) {
  let [x1, y1, x2, y2, x, y] = [...arg.map(Number)]
  return (x >= x1 && x <= x2 && y >= y1 && y <= y2) ? 'Inside' : 'Outside'
}

//console.log(pointInRectangle(['2', '-3', '12', '3', '8', '1']))
