function rectangleArea([x1, y1, x2, y2]) {
  let corX = parseFloat(Math.max(x1, x2) - parseFloat(Math.min(x1, x2)))
  let corY = parseFloat(Math.max(y1, y2) - parseFloat(Math.min(y1, y2)))
  
  return `${corX * corY}\n${(corX + corY) * 2}`
}

//console.log(rectangleArea(['60', '20', '10', '50']))

