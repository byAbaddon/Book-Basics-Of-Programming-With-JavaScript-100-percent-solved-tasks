function vegetableMarket([priceVegetables, priceFruits, kgV, kgF]) {
  let allSum = priceVegetables * kgV + priceFruits * kgF
  return allSum / 1.94
}

//console.log(vegetableMarket([0.194, 19.4, 10, 10]))