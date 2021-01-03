function transportPrice([km, if_day]) {

  let [taxi, bus, train, price] = [0.70, 0.09, 0.06, 0]
  let taxRate = 0
  if (if_day === 'day') {
    taxRate = 0.79
  } else {
    taxRate = 0.90
  }

  if (km < 20) {
    price = taxi + (km * taxRate)
  } else if (km < 100) {
    price = bus * km
  } else {
    price = km * train
  }

  return price
}

// console.log(transportPrice(['5', 'day']))
// console.log(transportPrice(['180', 'night']))