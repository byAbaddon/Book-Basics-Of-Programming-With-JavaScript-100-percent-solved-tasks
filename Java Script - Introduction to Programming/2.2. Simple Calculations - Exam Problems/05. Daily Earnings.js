function dailyEarnings([...arg]) {
  let [workDayInMonth, moneyPerDay, usdPrice] = [...arg.map(parseFloat)]

  let mountCash = workDayInMonth * moneyPerDay
  let allMoney = mountCash * 12 + mountCash * 2.5
  let moneyCounter = allMoney / 100 * 25
  let moneyConvertToLeva = (allMoney - moneyCounter) * usdPrice
  let totalMoneyForDay = (moneyConvertToLeva / 365).toFixed(2)
  return totalMoneyForDay
}

//console.log(dailyEarnings(['21', '75.00', '1.59']))