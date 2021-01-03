function harvest(arg) {
  let [vineyard, grapePerSquare, wineNeed, workers] = [...arg.map(Number)]
  let totalGrape = vineyard * grapePerSquare;
  let totalWine = totalGrape * (40.0 / 100) / 2.5

  if (totalWine >= wineNeed) {
    console.log(`Good harvest this year! Total wine: ${Math.floor(totalWine)} liters.`)
    console.log(`${Math.ceil(totalWine-wineNeed)} liters left -> ${Math.ceil((totalWine-wineNeed)/workers)} liters per person.`)
  } else {
    console.log(`It will be a tough winter! More ${Math.floor(Math.abs(totalWine-wineNeed))} liters wine needed.`)
  }
}

//harvest([650, 2, 175, 3])