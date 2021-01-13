function flowers([...arg]) {
  let [chrysanthemumsCount, rosesCount, tulipsCount, season, discount] = [...arg.map(el => isNaN(el) ? el : Number(el))]
  
let sum = 0
  if (season == 'Spring' || season == 'Summer'){
        sum += chrysanthemumsCount * 2
        sum += rosesCount * 4.1
        sum += tulipsCount * 2.5
  }else if (season == 'Autumn' || season == 'Winter'){
        sum += chrysanthemumsCount * 3.75
        sum += rosesCount * 4.5
        sum += tulipsCount * 4.15
  }

  if (discount === 'Y')  sum *= 1.15
   
  if (season == 'Spring' && tulipsCount > 7) {
    sum *= 0.95
  }
  if (season === 'Winter' && rosesCount >= 10) {
    sum *= 0.90
  }
  if ((chrysanthemumsCount + rosesCount + tulipsCount) > 20) {
    sum *= 0.80
  }

  return (sum + 2).toFixed(2)
}

//console.log(flowers(['2', '4', '8', 'Spring', 'Y']))
//console.log(flowers(['3', '10', '9', 'Winter', 'N']) )
