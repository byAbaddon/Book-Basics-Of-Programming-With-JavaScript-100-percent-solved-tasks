function tradeCommissions([city, money]) {
  let result = 0
  const arr = ["Sofia", "Varna", "Plovdiv"]
  let obj = {
    Sofia: { s: 5, m: 7, l: 8, xl: 12 },
    Varna: { s: 4.5, m: 7.5, l: 10, xl: 13 },
    Plovdiv: { s: 5.5, m: 8, l: 12, xl: 14.5 }
  }

  if (!arr.includes(city) || money < 0) return 'error'

  switch (true) {
    case money <= 500:
      result = (obj[city].s * money) / 100
      break;
    case money > 500 && money <= 1000:
      result = (obj[city].m * money) / 100
      break;
    case money > 1000 && money <= 10000:
      result = (obj[city].l * money) / 100
      break;
    case money > 10000:
      result = (obj[city].xl * money) / 100
      break;
  }

  return result.toFixed(2)
}


//console.log(tradeCommissions(['plovdiv', '10000']))

