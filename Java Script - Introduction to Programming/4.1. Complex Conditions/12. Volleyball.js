function volleyball([typeYear, holidayWeekend, simpleWeekend]) {
  let weekend = (48 - simpleWeekend) * 3 / 4 
  let holiday = (holidayWeekend * 2.0) / 3
  let allGames = weekend + holiday + +simpleWeekend  
  return typeYear === 'leap' ?  ~~(allGames * 115 / 100) : ~~(allGames)
}

//console.log(volleyball(['15', '30', '0']))
