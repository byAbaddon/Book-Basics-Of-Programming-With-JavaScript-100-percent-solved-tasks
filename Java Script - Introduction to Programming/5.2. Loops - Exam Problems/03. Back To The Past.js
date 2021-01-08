function backToThePast(arg) {
  let [money, years] = [...arg.map(parseFloat)]
  let yearsOld = 17
  for (let i = 1800; i <= years; i++) {
    yearsOld++
    if(i % 2 == 0){
      money -= 12000
     } else{
        money -= 12000 + yearsOld * 50
      } 
  } 

  if (money >= 0)
    return `Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`
  return `He will need ${Math.abs(money).toFixed(2)} dollars to survive.`
}

//console.log(backToThePast([50000, 1802]))
