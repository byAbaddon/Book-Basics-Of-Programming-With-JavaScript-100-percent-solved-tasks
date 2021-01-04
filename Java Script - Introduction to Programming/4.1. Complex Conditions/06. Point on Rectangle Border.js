function pointOnRectangleBorder([...arg]) {
  let [x1, y1, x2, y2, x, y] = [...arg.map(Number)]
  let findX = (x === x1 || x === x2) && (y >= y1) && (y <= y2);
  let findY = (y === y1 || y === y2) && (x >= x1) && (x <= x2);
  return findX || findY ? 'Border' : 'Inside / Outside'
}

//console.log(pointOnRectangleBorder(['2', '-3', '12', '3', '12', '-1']))
