function changeTiles([square, wOfTiles, lOfTiles, wOfBench, lOfBench,]) {
  
  let areaOfSquare = square ** 2 
  let areaOfTiles = wOfTiles * lOfTiles
  let timeTiles = 0.2
  let areaOfBench = wOfBench * lOfBench
  let finalArea = areaOfSquare - areaOfBench
  let numberOfTiles = finalArea / areaOfTiles;
  let finalTime = numberOfTiles * timeTiles
           
  return `${+numberOfTiles.toFixed(2)}\n${+finalTime.toFixed(2)}`
}

//console.log(changeTiles(['20', '5', '4', '1', '2']))

