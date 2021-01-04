function fruitShop([...arg]) {
  const [item, day, count] = [...arg]
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  let shop = {banana: 2.50, apple: 1.20, orange: 0.85, grapefruit: 1.45, kiwi: 2.70, pineapple: 5.50, grapes: 3.85 }
  let weekendShop = {banana: 2.70, apple: 1.25, orange: 0.90, grapefruit: 1.60, kiwi: 3.00, pineapple: 5.60, grapes: 4.20 }
  
  if (days.indexOf(day) === -1 || !shop.hasOwnProperty(item)) return 'error'
  return days.indexOf(day) <= 4 ? (shop[item] * count).toFixed(2) : (weekendShop[item] * count).toFixed(2)
}

//console.log(fruitShop(['grapes', 'Saturday', '0.5']))

