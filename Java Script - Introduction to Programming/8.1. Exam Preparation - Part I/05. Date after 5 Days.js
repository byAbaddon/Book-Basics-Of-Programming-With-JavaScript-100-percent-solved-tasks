function dateAfter5Days([...arg]) {
  let [day, month] = [...arg.map(Number)]
  const daysObj = {1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31}
  
  day += 5

  if (daysObj[month] < day ) {
    day -= daysObj[month] 
    month++
    month > 12 ? month -= 12 : null 
  }

  month < 10 ? month = '0' + month : null 
  return `${day}.${month}`
}

// console.log(dateAfter5Days(['28', '03']))
// console.log(dateAfter5Days(['27', '12']))
// console.log(dateAfter5Days(['25', '1']))
// console.log(dateAfter5Days(['26', '02']))