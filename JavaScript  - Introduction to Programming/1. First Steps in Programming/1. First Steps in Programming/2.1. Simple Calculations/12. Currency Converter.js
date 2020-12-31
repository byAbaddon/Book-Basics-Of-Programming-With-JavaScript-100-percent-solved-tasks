function currencyConverter([money, currencyOne, currencyTwo]) {
  const valutObj = {'BGN' : 1, 'USD' : 1.79549, 'EUR' : 1.95583, 'GBP' : 2.53405}
  return  (money * valutObj[currencyOne] / valutObj[currencyTwo]).toFixed(2) + ' ' + currencyTwo
}

// console.log(currencyConverter([20, 'USD', 'BGN']))
// console.log(currencyConverter([150.35, 'USD', 'EUR']))


