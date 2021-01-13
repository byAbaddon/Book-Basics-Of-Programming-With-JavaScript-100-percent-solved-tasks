function changeTiles([...arg]) {
  let [money, wHallway, hHallway, sT, hT, priseOneTile, masterMoney] = [...arg.map(Number)]
  let arrayHallway = wHallway * hHallway
  let arrayTiles = (sT * hT) / 2
  let hall = Math.ceil(arrayHallway / arrayTiles + 5)
  let sumForTiles = hall * priseOneTile + masterMoney

  if (sumForTiles <= money)
    return Math.abs(sumForTiles - money).toFixed(2) + ' lv left.'
  return `You'll need ${(Math.abs(sumForTiles - money).toFixed(2))} lv more.`
}

// console.log(changeTiles(['500', '3', '2.5', '0.5', '0.7', '7.80', '100']))
