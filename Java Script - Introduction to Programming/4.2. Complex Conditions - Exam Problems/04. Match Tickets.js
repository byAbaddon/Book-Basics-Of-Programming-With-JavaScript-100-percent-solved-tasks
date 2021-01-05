function matchTickets([cash, category, people]) {
  [cash, people, ticket, money, subtotal, total, result]  = [+cash, +people, 0, 0, 0, 0, 0]
 
  switch (category) {
    case 'Normal': ticket = 249.99;  break
    case 'VIP':ticket = 499.99;  break
  }

  if (people <= 4) { money = cash * 0.75}
  else if (people <= 9) { money = cash * 0.60}
  else if (people <= 24) { money = cash * 0.50}
  else if (people <= 49) { money = cash * 0.40}
  else if (people > 49) { money = cash * 0.25}
  total = cash - money
  subtotal = ticket * people
  result = Math.abs(subtotal - total)

   if (subtotal > total) 
    return `Not enough money! You need ${result.toFixed(2)} leva.`  
  return `Yes! You have ${result.toFixed(2)} leva left.`
}

//console.log(matchTickets(['1000', 'Normal', '1']))

