function distance([...arg]) {
  let [kmSpeed, firstTimeMin, secondTimeMin, threeTimeMInt] = [...arg.map(Number)]

  let cap = kmSpeed * firstTimeMin / 60
  let cap2 = (kmSpeed + kmSpeed * 0.10) * (secondTimeMin / 60)
  let cap3 = ((kmSpeed + kmSpeed * 0.10) * 0.95) * (threeTimeMInt / 60)

  return (cap + cap2 + cap3).toFixed(2)

}

// console.log(distance([' 140', '112', '75 ', '190 ']))